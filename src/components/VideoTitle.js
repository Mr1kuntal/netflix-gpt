import React from 'react';


const VideoTitle = ({original_title,overview}) => {


  return (
    <div className=' text-white pt-[1%] md:pt-[20%] px-2 md:px-24 bg-gradient-to-r from-black absolute w-full aspect-video'>
        <h1 className=' text-xl md:text-2xl font-bold'>{original_title}</h1>
        <p className='hidden md:inline-block py-3 text-sm w-1/4'>{overview}</p>
        <div>
            <button className='bg-gray-500 py-1 md:py-2 px-4 md:px-8  text-lg bg-opacity-50 rounded-xl md:rounded-md hover:bg-opacity-15'>▷Play</button>
        </div>
    </div>
  )
}

export default VideoTitle