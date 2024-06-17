import React from 'react'
import MovieCard from './MovieCard'

const MovieGenre = ({movieGenre,movieData}) => {

  return (
    <div className='p-0 md:p-2'>

        <h1 className='font-bold text-lg md:text-2xl py-1 text-white'>{movieGenre}</h1>
        <div className='flex overflow-x-auto no-scrollbar'>
            {movieData?.map((movie)=> <MovieCard key={movie.id} singleMovieData={movie}/>)}
        </div>
        
    </div>
  )
}

export default MovieGenre