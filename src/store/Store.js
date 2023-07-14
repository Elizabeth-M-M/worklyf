import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../features/modal/ModalSlice";

export const store = configureStore({
  reducer:{
    modal:ModalSlice
  }
})
