import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

const store = configureStore({
    reducer:{
        data : cardReducer,
    }
})

export default store;