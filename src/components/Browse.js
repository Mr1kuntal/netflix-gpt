import React from 'react'
import Header from './Header'
// import { useSelector } from 'react-redux';
import useGetMovie from '../utils/useGetMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  // const userInfo = useSelector((store) => store.user);

  useGetMovie();

  return (
    <div>
      
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* {userInfo && <div><h1>Name : {userInfo.displayName}</h1><h2>email : {userInfo.email}</h2></div>} */}
      
    </div>
  )
};

export default Browse;