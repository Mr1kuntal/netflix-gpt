import React from 'react'
import useGetTrailor from '../utils/useGetTrailor'
import { useSelector } from 'react-redux';

const VideoBg = ({movieId}) => {

  useGetTrailor(movieId);

  const trailor = useSelector((store)=> store.movie?.trailorVideo);
  return (
    <div>
        <iframe 
            className='w-full aspect-video' 
            src={"https://www.youtube.com/embed/"+trailor?.key+"?si=XkVQzokMBBEnaXXe&autoplay=1&mute=1&controls=0&loop=1&playlist="+trailor?.key}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
    </div>
  )
}



export default VideoBg;