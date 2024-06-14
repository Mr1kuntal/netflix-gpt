import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState: {
        nowPlayingMovie : null,
        trailorVideo : null,
    } ,
    reducers : {
        addMovie : (state,action) => { 
            state.nowPlayingMovie = action.payload;
        },
        addTrailor : (state,action) => {
            state.trailorVideo = action.payload;
        },
        removeMovie : (state,action) => {
            state.nowPlayingMovie = null;
        },
        removeTrailor : (state,action) => {
            state.trailorVideo = null;
        },
    },
});

export const { addMovie, addTrailor, removeMovie, removeTrailor } = movieSlice.actions;

export default movieSlice.reducer;