import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../features/modal/ModalSlice";
import TaskSlice from "../features/tasks/TaskSlice";

export const store = configureStore({
  reducer:{
    modal:ModalSlice,
    task:TaskSlice,
  }
})
