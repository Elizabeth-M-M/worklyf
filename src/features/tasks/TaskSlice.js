import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3000/tasks";

const initialState={
  tasks:[],
  isLoading:true
}
export const getTasks = createAsyncThunk('tasks/getTasks',
async(name, thunkAPI)=>{
  try{
    const resp = await axios(url)

  }catch(error){
    return thunkAPI.rejectWithValue('something went wrong')
  }
})

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    addTask: (state, {payload}) => {
      const task = payload;
      state.tasks = [...state.tasks,task]
    },
    editTask: (state, {payload}) => {
      const oneTask= state.tasks.find(task=>task.id==payload.id)
      oneTask={...oneTask, payload}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});
export const {}=taskSlice.actions
export default taskSlice.reducer