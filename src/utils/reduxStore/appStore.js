import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
    reducer : { // this is reducer which modify redux store 
        user : userReducer, // this is reducer which modify user slice
        movie : movieReducer,
        gpt : gptReducer,
        configLanguage : languageReducer,
    }
});

export default appStore;