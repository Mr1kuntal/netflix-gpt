import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/ConfigFileForFireBase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid , email , displayName } = user.auth.currentUser;
        dispatch(addUser({uid:uid , email: email , displayName : displayName}));        
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[]);

  return (<></>);
}

export default Body;