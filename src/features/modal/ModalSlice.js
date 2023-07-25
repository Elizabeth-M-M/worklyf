import { createSlice } from "@reduxjs/toolkit";
 const initialState= {
  showCreateTask:false
 }
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCreateTask: (state, action) => {

      state.showCreateTask = !state.showCreateTask;
    },
    closeCreateTask: (state, action) => {
      state.showCreateTask = !state.showCreateTask;
    },
  },
});
export const { openCreateTask, closeCreateTask } = modalSlice.actions;
export default modalSlice.reducer;