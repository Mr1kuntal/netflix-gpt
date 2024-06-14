import React from 'react'

const MovieCard = ({singleMovieData}) => {
  return (
    <div className='p-2'>
        <img className='w-36 max-w-none' src={"https://image.tmdb.org/t/p/w500"+singleMovieData.poster_path} alt={singleMovieData.original_title} />
    </div>
  )
}

export default MovieCard