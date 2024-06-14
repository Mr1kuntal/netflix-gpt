import React from 'react';


const VideoTitle = ({original_title,overview}) => {


  return (
    <div className=' text-white pt-[20%] px-24 bg-gradient-to-r from-black absolute w-full aspect-video'>
        <h1 className='text-2xl font-bold'>{original_title}</h1>
        <p className='py-3 text-sm w-1/4'>{overview}</p>
        <div>
            <button className='bg-gray-500 py-2 px-8  text-lg bg-opacity-50 rounded-md hover:bg-opacity-15'>▷Play</button>
            <button className='bg-gray-500 py-2 px-8  text-lg bg-opacity-50 rounded-md hover:bg-opacity-15 mx-2'>🛈MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle