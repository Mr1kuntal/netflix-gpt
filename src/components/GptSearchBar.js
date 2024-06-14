import React from 'react'
import lang from "../utils/languageConstant"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.configLanguage.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='px-4 py-2 m-4 col-span-9 bg-gray-800 text-white'/>
            <button className='text-white rounded-md bg-red-600 m-4 col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar