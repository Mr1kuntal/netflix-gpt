import React from 'react'

const MovieCard = ({singleMovieData,youtubeKey}) => {
  const handleImageClick = () => {
    window.open('https://www.youtube.com/watch?v='+youtubeKey, '_blank');
  };
  return (
    <div className='p-2'>
        <img className='w-36 max-w-none cursor-pointer' onClick={handleImageClick} src={"https://image.tmdb.org/t/p/w500"+singleMovieData.poster_path} alt={singleMovieData.original_title} />
    </div>
  )
}

export default MovieCard