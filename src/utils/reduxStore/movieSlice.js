import { createSlice } from "@reduxjs/toolkit";
import {searchInputInitialValue} from "../searchInput";
const movieSlice = createSlice({
    name : "movie",
    initialState: {
        nowPlayingMovie : null,
        popularMovie : null ,
        topRatedMovie : null ,
        upcomingMovie : null,
        trailorVideo : null,
        searchInput : searchInputInitialValue ,
    } ,
    reducers : {
        addMovie : (state,action) => { 
            state.nowPlayingMovie = action.payload;
        },

        addPopularMovie : (state,action) => { 
            state.popularMovie = action.payload;
        },

        addTopRatedMovie : (state,action) => { 
            state.topRatedMovie = action.payload;
        },

        addUpcomingMovie : (state,action) => { 
            state.upcomingMovie = action.payload;
        },

        addTrailor : (state,action) => {
            state.trailorVideo = action.payload;
        },     
        addSearchInput : (state,action) => { 
            state.searchInput = action.payload;
        },    

    },
});

export const { addMovie, addTrailor,  addPopularMovie , addTopRatedMovie,  addUpcomingMovie , addSearchInput } = movieSlice.actions;

export default movieSlice.reducer;