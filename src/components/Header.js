import React from 'react'
import netflixGPTLogo from "../utils/netflixGPTLogo.png"


const Header = () => {  
  return (
    <div className='absolute p-10 bg-gradient-to-b from-black z-10'>
        <img className='w-60' src={netflixGPTLogo} alt='netflixGPTLogo'/>
    </div>
  )
}

export default Header;