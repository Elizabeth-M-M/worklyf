import { createSlice } from "@reduxjs/toolkit";
 const initialState = {
   showCreateTask: false,
   showProfileMenu: false,
   showTaskMenu: false,
   showViewProfileTab: false,
   showEditProfileTab: false
 };
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
    openViewProfileTab: (state, action) => {
      state.showViewProfileTab = !state.showViewProfileTab;
    },
    closeViewProfileTab: (state, action) => {
      state.showViewProfileTab = !state.showViewProfileTab;
    },
    openEditProfileTab: (state, action) => {
      state.showEditProfileTab = !state.showEditProfileTab;
    },
    closeEditProfileTab: (state, action) => {
      state.showEditProfileTab = !state.showEditProfileTab;
    },
  },
});
export const { openCreateTask, closeCreateTask, displayProfileMenu, displayTaskMenu, openViewProfileTab, closeViewProfileTab, openEditProfileTab, closeEditProfileTab } = modalSlice.actions;
export default modalSlice.reducer;