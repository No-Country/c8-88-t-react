import { configureStore } from "@reduxjs/toolkit";
/* import userReducer from '../reducers/users/index' */
import orderReducer from "../reducers/users/index"

export default configureStore({
    reducer: {
        order: orderReducer
    }
})