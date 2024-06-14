import { useEffect } from "react";
import {API_OPTIONS_TMDB} from "../ConfigFileForFireBase";
import { useDispatch } from "react-redux";
import { addMovie , addPopularMovie , addTopRatedMovie , addUpcomingMovie } from "../reduxStore/movieSlice";
import MOVIE_LIST from "../movieList.json";


const useGetMovie = () => {
    const dispatch = useDispatch();
    const getMovie = async () => {
          try {
            {
              const jsonData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS_TMDB);
              const data = await jsonData.json();
              // console.log("MOVIE_LIST");
              // console.log(data.results);
              dispatch(addMovie(data.results));
            }
            {
              const jsonData = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS_TMDB);
              const data = await jsonData.json();
              // console.log("MOVIE_LIST");
              // console.log(data.results);
              dispatch(addPopularMovie(data.results));              
            }
            {
              const jsonData = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS_TMDB);
              const data = await jsonData.json();
              // console.log("MOVIE_LIST");
              // console.log(data.results);
              dispatch(addTopRatedMovie(data.results));              
            }
            {
              const jsonData = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS_TMDB);
              const data = await jsonData.json();
              // console.log("MOVIE_LIST");
              // console.log(data.results);
              dispatch(addUpcomingMovie(data.results));              
            }

            
          } catch (error) {
            // dispatch hard coded data if there is error in fetch
            // data.results==MOVIE_LIST
            dispatch(addMovie(MOVIE_LIST));
            dispatch(addPopularMovie(MOVIE_LIST));
            dispatch(addTopRatedMovie(MOVIE_LIST));
            dispatch(addUpcomingMovie(MOVIE_LIST));
          }
      }
    
      useEffect(()=>{
        getMovie();
      },[]);
};

export default useGetMovie; 

