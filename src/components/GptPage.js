import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import loginBgLogo from "../utils/loginBgLogo.jpg"

const GptPage = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img className='h-screen object-cover md:w-screen md:object-cover' src={loginBgLogo} alt='loginBgLogo'/>
        </div>      
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>

  )
}

export default GptPage