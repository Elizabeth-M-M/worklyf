import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk("task/getTasks", async (id) => {
  const res = await fetch(`http://localhost:3000/users/${id}/tasks`).then(
    (data) => data.json()
  );
  return res;
});
export const addTaskToServer = createAsyncThunk(
  "task/addTask",
  async ({ id, task }) => {
    const res = await fetch(`http://localhost:3000/users/${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((resp) => resp.json());
    console.log(res);
    return res;
  }
);
export const editTaskToServer = createAsyncThunk(
  "task/editTask",
  async ({ id, task }) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((resp) => resp.json());
    return res;
  }
);
export const deleteTaskToServer = createAsyncThunk(
  "task/deleteTask",
  async ({ id }) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = [action.payload];
    },
    [getTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addTaskToServer.pending]: (state, action) => {
      state.loading = true;
    },
    [addTaskToServer.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.hasOwnProperty("errors")) {
        state.error = action.payload.errors;
      } else {
        state.error = null;
        state.tasks.push(action.payload);
      }
    },
    [addTaskToServer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [editTaskToServer.pending]: (state, action) => {
      state.loading = true;
    },
    [editTaskToServer.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload.hasOwnProperty("errors"));

      if (action.payload.hasOwnProperty("errors")) {
        state.error = action.payload.errors;
      } else {
        state.error = null;

        const modified =state.tasks.map(task=>{
          if(task.id==action.payload.id){
            return action.payload
          }else{
            return task
          }
        })
        state.tasks = modified
      }
    },
    [editTaskToServer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTaskToServer.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTaskToServer.fulfilled]: (state, { id }) => {
      state.loading = false;
      state.tasks = state.tasks.filter((item) => item.id !== id);
    },
    [deleteTaskToServer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
// export const {  } = taskSlice.actions;
export default taskSlice.reducer;
