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
                   
    },
});

export const { toggleGptPage  } = gptSlice.actions;

export default gptSlice.reducer; 