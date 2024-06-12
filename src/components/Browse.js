import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';

const Browse = () => {
  const userInfo = useSelector((store) => store.user);

  return (
    <div>
      <div>
        <Header/>
      </div>
      {userInfo && <div><h1>Name : {userInfo.displayName}</h1><h2>email : {userInfo.email}</h2></div>}
      
    </div>
  )
}

export default Browse