import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
    reducer : { // this is reducer which modify redux store 
        user : userReducer, // this is reducer which modify user slice
        movie : movieReducer,
    }
});

export default appStore;