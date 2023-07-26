import { createSlice } from "@reduxjs/toolkit";
 const initialState= {
  showCreateTask:false,
  showProfileMenu:false,
  showTaskMenu:false
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
    displayProfileMenu: (state, action) => {
      state.showProfileMenu = !state.showProfileMenu;
    },
    displayTaskMenu: (state, action) => {
      state.showTaskMenu = !state.showTaskMenu;
    },
  },
});
export const { openCreateTask, closeCreateTask, displayProfileMenu, displayTaskMenu } = modalSlice.actions;
export default modalSlice.reducer;