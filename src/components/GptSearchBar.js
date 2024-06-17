import React, { useRef, useState } from 'react'
import lang from "../utils/languageConstant"
import { useSelector } from 'react-redux';
import openAi from "../utils/openAi";
import TextAnimation from './TextAnimation';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.configLanguage.lang);
    const [textGiven,setTextGiven] = useState("");
    const searchInput = useRef(null);
    const speedGiven = 30; // Speed set to 50 milliseconds per character

    const handleGptSearch = async () => {
        setTextGiven("");

        const chatCompletion = await openAi.chat.completions.create({
          messages: [{ role: 'user', content: searchInput.current.value }],
          model: 'pai-001',
        });
        
        setTextGiven(chatCompletion.choices[0].message.content);

    }

    
  return (
    <div className='pt-[50%] md:pt-[10%]'>
      <div className=' flex justify-center'>
          <form onSubmit={(e)=>{e.preventDefault()}} className='bg-black w-full md:w-1/2 grid grid-cols-12'>
              <input ref={searchInput} type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='px-4 py-2 m-4 col-span-9 bg-gray-800 text-white'/>
              <button  className='text-white rounded-md bg-red-600 m-4 col-span-3' onClick={handleGptSearch}>{lang[langKey].gptName}</button>
          </form>
      </div>
      {textGiven && 
      <div className='flex justify-center bg-blue-500 my-4 md:my-10 mx-2 md:mx-52 rounded-lg text-white p-2 md:p-5'>
          <TextAnimation text={textGiven} speed={speedGiven} />
      </div>
      }
    </div>

  )
}

export default GptSearchBar