import React from 'react'

const TvShowCard = ({showData}) => {
  const handleImageClick = () => {
    window.open('https://www.imdb.com/title/'+showData.show?.externals?.imdb, '_blank');
  };
  return (
    <div className='p-2'>
        <img className='w-36 max-w-none cursor-pointer' onClick={handleImageClick} src={showData.show?.image?.original} alt={showData.show.name} />
    </div>
  )
}

export default TvShowCard