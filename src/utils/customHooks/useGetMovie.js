import { useEffect } from "react";
import {API_OPTIONS_TMDB} from "../searchInput";
import { useDispatch, useSelector } from "react-redux";
import { addMovie , addPopularMovie , addTopRatedMovie , addUpcomingMovie } from "../reduxStore/movieSlice";
import MOVIE_LIST from "../movieList.json";


const useGetMovie = () => {
    const dispatch = useDispatch();
    const allMovie = useSelector((store)=>store.movie?.nowPlayingMovie);
    const getMovie = async () => {
      // this is calling tmdb api , but they are not working in India so dispatching hard coded data
          // try {
          //   {
          //     const jsonData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS_TMDB);
          //     const data = await jsonData.json();
          //     dispatch(addMovie(data.results));
          //   }
          //   {
          //     const jsonData = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS_TMDB);
          //     const data = await jsonData.json();
          //     dispatch(addPopularMovie(data.results));              
          //   }
          //   {
          //     const jsonData = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS_TMDB);
          //     const data = await jsonData.json();
          //     dispatch(addTopRatedMovie(data.results));              
          //   }
          //   {
          //     const jsonData = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS_TMDB);
          //     const data = await jsonData.json();
          //     // console.log("MOVIE_LIST");
          //     // console.log(data.results);
          //     dispatch(addUpcomingMovie(data.results));              
          //   }

            
          // } catch (error) {
          //   // dispatch hard coded data if there is error in fetch
          //   // data.results==MOVIE_LIST
          //   dispatch(addMovie(MOVIE_LIST));
          //   dispatch(addPopularMovie(MOVIE_LIST));
          //   dispatch(addTopRatedMovie(MOVIE_LIST));
          //   dispatch(addUpcomingMovie(MOVIE_LIST));
          // }
          dispatch(addMovie(MOVIE_LIST));
          dispatch(addPopularMovie(MOVIE_LIST));
          dispatch(addTopRatedMovie(MOVIE_LIST));
          dispatch(addUpcomingMovie(MOVIE_LIST));
      }
    
      useEffect(()=>{
        if(!allMovie) getMovie();
      },[]);
};

export default useGetMovie; 

