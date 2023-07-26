import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../features/modal/ModalSlice";
import TaskSlice from "../features/tasks/TaskSlice";
import UserSlice from "../features/user/UserSlice";

export const store = configureStore({
  reducer:{
    modal:ModalSlice,
    task:TaskSlice,
    user:UserSlice
  }
})
