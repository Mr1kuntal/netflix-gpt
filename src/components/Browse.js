import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';

const Browse = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <div>
        <Header/>
      </div>
      {/* {user && <div><h1>Name : {user.displayName}</h1><h2>email : {user.email}</h2></div>} */}
      
    </div>
  )
}

export default Browse