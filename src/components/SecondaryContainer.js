import React from 'react'
import MovieGenre from './MovieGenre'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const Movie = useSelector((store)=>store.movie);

  return Movie && (
    <div className='px-4 bg-black'>
      <div className='mt-0 md:-mt-28 z-40 relative'>
        <MovieGenre movieGenre={"NowPlaying"} movieData={Movie.nowPlayingMovie} />
        <MovieGenre movieGenre={"Popular"} movieData={Movie.popularMovie} />
        <MovieGenre movieGenre={"TopRated"} movieData={Movie.topRatedMovie} />
        <MovieGenre movieGenre={"Upcoming"} movieData={Movie.upcomingMovie} />
      </div>
      

      {/* 

      -nowPlayingMovie
        -movieCards
      -popularMovie
      -topRatedMovie
      -upcomingMovie

      */}
    </div>
  )
}

export default SecondaryContainer;