import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState: {
        toggleGpt : false,
    },
    reducers : {
        toggleGptPage : (state) => { 
            state.toggleGpt = !state.toggleGpt;
        },
        offGptPage : (state) => { 
            state.toggleGpt = false;
        },
    },
});

export const { toggleGptPage ,offGptPage } = gptSlice.actions;

export default gptSlice.reducer; 