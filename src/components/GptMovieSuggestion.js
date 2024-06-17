import React from 'react'
import TvShowSearchBar from './TvShowSearchBar'
import TvShowCard from './TvShowCard'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {
  const tvShow = useSelector((store) => store.movie?.searchInput);
  return (
    <div>

      <TvShowSearchBar/>
      {
        tvShow && <div className='flex overflow-x-auto no-scrollbar bg-black p-5 m-10'>
        {
          (!tvShow.length ? <h1 className='text-white font-bold text-2xl'>No result found</h1> : tvShow.map((item,index) => <TvShowCard key={index} showData={item} />))
        }
        </div>
      }
      
    </div>
  )
}

export default GptMovieSuggestion