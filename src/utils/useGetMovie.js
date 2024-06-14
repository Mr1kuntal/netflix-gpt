import { useEffect } from "react";
import {API_OPTIONS_TMDB} from "./ConfigFileForFireBase";
import { useDispatch } from "react-redux";
import { addMovie } from "./movieSlice";
import MOVIE_LIST from "./movieList.json";


const useGetMovie = () => {
    const dispatch = useDispatch();
    const getMovie = async () => {
          try {

            const jsonData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS_TMDB);
            const data = await jsonData.json();
            // console.log("MOVIE_LIST");
            // console.log(data.results);
            dispatch(addMovie(data.results));
            
          } catch (error) {
            // dispatch hard coded data if there is error in fetch
            // data.results==MOVIE_LIST
            dispatch(addMovie(MOVIE_LIST));
          }
      }
    
      useEffect(()=>{
        getMovie();
      },[]);
};

export default useGetMovie; 

