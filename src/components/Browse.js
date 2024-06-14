import React from 'react'
import Header from './Header'
import useGetMovie from '../utils/customHooks/useGetMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  // const userInfo = useSelector((store) => store.user);

  useGetMovie();
  
  const showGptPage = useSelector((store) => store.gpt.toggleGpt);

  return (
    <div>
      
      <Header/>
      {showGptPage ? <GptPage/> : <><MainContainer/><SecondaryContainer/></>}

      {/* {userInfo && <div><h1>Name : {userInfo.displayName}</h1><h2>email : {userInfo.email}</h2></div>} */}
      
    </div>
  )
};

export default Browse;