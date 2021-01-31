import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});