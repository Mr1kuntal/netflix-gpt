import { useEffect } from "react";
import {API_OPTIONS_TMDB} from "../ConfigFileForFireBase";
import { useDispatch, useSelector } from "react-redux";
import { addTrailor } from "../reduxStore/movieSlice";
import TRAILOR from "../trailor.json";



const useGetTrailor = (movieId) => {
    const dispatch = useDispatch();
    const trailorFromStore = useSelector((store)=> store.movie?.trailorVideo);
    const getTrailor = async () => {
        // this is calling tmdb api , but they are not working in India so dispatching hard coded data
        // try {

        //     const jsonData = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS_TMDB);
        //     const data = await jsonData.json();
        //     // console.log("data");
        //     // console.log(data);   
            
        //     const filterData = data.results.filter((video)=>video.type === "Trailer");
        //     const trailor = filterData.length ? filterData[0] : data.results[0];
        //     // console.log("TRAILOR");
        //     // console.log(trailor);

        //     dispatch(addTrailor(trailor));
            
        // } catch (error) {
        //     // dispatch hard coded data for trailor if fetch failed 
        //     // trailor should be of same movie so add trailor to trailor.json according to moviedId
        //     dispatch(addTrailor(TRAILOR));
        // }
        dispatch(addTrailor(TRAILOR));
    };

    useEffect(()=>{
        if(!trailorFromStore) getTrailor();
    },[]);
  
};

export default useGetTrailor;