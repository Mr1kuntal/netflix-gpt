import React, { useRef } from 'react'
import lang from "../utils/languageConstant"
import { useDispatch, useSelector } from 'react-redux';
import {addSearchInput} from "../utils/reduxStore/movieSlice";

const TvShowSearchBar = () => {
    const langKey = useSelector((store) => store.configLanguage.lang);
    const searchInput = useRef(null);
    const dispatch = useDispatch();
    const handleSearch = async () => {
        try {

            const jsonData = await fetch("https://api.tvmaze.com/search/shows?q="+searchInput.current.value);
            const data = await jsonData.json();
            // console.log(data);
            dispatch(addSearchInput(data));
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='pt-[10%] md:pt-[5%]'>
      <div className=' flex justify-center'>
          <form onSubmit={(e)=>{e.preventDefault()}} className='bg-blue-600 w-9/12 md:w-1/3 grid grid-cols-12 rounded-2xl'>
              <input ref={searchInput} type='text' placeholder={lang[langKey].searchPlaceholder} className='m-1 py-1 px-3 rounded-2xl col-span-9 bg-black text-white'/>
              <button  className='text-white rounded-2xl bg-black col-span-3 m-1' onClick={handleSearch}>⌕{lang[langKey].search}</button>
          </form>
      </div>
    </div>

  )
}

export default TvShowSearchBar