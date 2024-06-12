import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer : { // this is reducer which modify redux store 
        user : userReducer, // this is reducer which modify cart slice
    }
});

export default appStore;