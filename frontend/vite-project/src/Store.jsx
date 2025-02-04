import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";

const store = configureStore({
    reducer:{
        mycart:cardReducer
    }
})

export default store;