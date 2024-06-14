import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const allMovie = useSelector((store)=>store.movie?.nowPlayingMovie);

  if(!allMovie) return ; // if allMovie==null just return

  const mainMovie = allMovie[0];
  const {original_title , overview , id } = mainMovie;  



  return (
    <div>
        <VideoTitle original_title={original_title} overview={overview}/>
        <VideoBg movieId={id}/>
    </div>
  )
};

export default MainContainer;