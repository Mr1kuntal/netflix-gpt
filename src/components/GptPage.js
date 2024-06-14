import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import loginBgLogo from "../utils/loginBgLogo.jpg"

const GptPage = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={loginBgLogo} alt='loginBgLogo'/>
        </div>      
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>

  )
}

export default GptPage