import React from 'react'
import netflixGPTLogo from "../utils/netflixGPTLogo.png"
import { signOut } from "firebase/auth";
import { auth } from '../utils/ConfigFileForFireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { removeMovie, removeTrailor } from '../utils/movieSlice';


const Header = () => {  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeMovie());
      dispatch(removeTrailor());
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  return (
    <div className='absolute w-full p-10 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-60' src={netflixGPTLogo} alt='netflixGPTLogo'/>
        <div>
            {userInfo && <button className=' text-white bg-red-600 rounded-md px-6 py-1' onClick={handleSignOut}>SignOut</button>} 
        </div>        
    </div>

    
  )
}

export default Header;