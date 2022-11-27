import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/users/index"

export default configureStore({
    reducer: reducer
})