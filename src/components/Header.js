import React from 'react'
import netflixGPTLogo from "../utils/netflixGPTLogo.png"
import { signOut } from "firebase/auth";
import { auth } from '../utils/ConfigFileForFireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { removeUser } from '../utils/reduxStore/userSlice';
import { toggleGptPage } from '../utils/reduxStore/gptSlice';
import {SupportedLang} from "../utils/languageConstant";
import {changeLanguage} from "../utils/reduxStore/languageSlice";


const Header = () => {  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
      console.log(error);
    });
  }

  const handleGptPage = () => {
    dispatch(toggleGptPage());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const showGptPage = useSelector((store) => store.gpt.toggleGpt);

  return (
    <div className='absolute w-full p-10 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-60 mx-auto md:mx-0 mb-10 md:mb-0' src={netflixGPTLogo} alt='netflixGPTLogo'/>
        <div className='flex justify-center'>
            {userInfo && <>
            {showGptPage && 
            <select className="px-2 rounded-md bg-gray-600 text-white" onChange={handleLanguageChange} >
              {SupportedLang.map((language) => (<option value={language.identifier} key={language.identifier} >{language.name}</option>))}
            </select>}
            
            <button className='text-white rounded-md px-6 py-1 bg-blue-600 mx-2' onClick={handleGptPage}>{showGptPage ? "Home" : "GptSearch"}</button>
            <button className='text-white rounded-md px-6 py-1 bg-red-600' onClick={handleSignOut}>SignOut</button>
            </>} 
        </div>        
    </div>

    
  )
}

export default Header;