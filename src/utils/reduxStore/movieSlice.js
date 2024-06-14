import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState: {
        nowPlayingMovie : null,
        popularMovie : null ,
        topRatedMovie : null ,
        upcomingMovie : null,
        trailorVideo : null,
    } ,
    reducers : {
        addMovie : (state,action) => { 
            state.nowPlayingMovie = action.payload;
        },
        removeMovie : (state,action) => {
            state.nowPlayingMovie = null;
        },


        addPopularMovie : (state,action) => { 
            state.popularMovie = action.payload;
        },
        removePopularMovie : (state,action) => {
            state.popularMovie = null;
        },


        addTopRatedMovie : (state,action) => { 
            state.topRatedMovie = action.payload;
        },
        removeTopRatedMovie : (state,action) => {
            state.topRatedMovie = null;
        },


        addUpcomingMovie : (state,action) => { 
            state.upcomingMovie = action.payload;
        },
        removeUpcomingMovie : (state,action) => {
            state.upcomingMovie = null;
        }, 
        
        
        addTrailor : (state,action) => {
            state.trailorVideo = action.payload;
        },        
        removeTrailor : (state,action) => {
            state.trailorVideo = null;
        },
    },
});

export const { addMovie, addTrailor, removeMovie, removeTrailor , addPopularMovie , removePopularMovie , addTopRatedMovie, removeTopRatedMovie , addUpcomingMovie , removeUpcomingMovie } = movieSlice.actions;

export default movieSlice.reducer;