import React, { useState ,useRef } from 'react'
import Header from './Header';
import loginBgLogo from "../utils/loginBgLogo.jpg"
import { loginFieldsValidation,signUpFieldsValidation } from '../utils/loginFieldsValidation';
import { auth } from '../utils/ConfigFileForFireBase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const [isLoginForm,setIsLoginForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage,setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleLoginForm = () => {
        setIsLoginForm(!isLoginForm);
    }

    const handleValidation = () => {
        const message = (isLoginForm ? loginFieldsValidation(email.current.value,password.current.value) : signUpFieldsValidation(name.current.value,email.current.value,password.current.value));

        setErrorMessage(message);

        if(message) return; 
        // if message is null means proceed 
        // if their is some message then return

        if(!isLoginForm){
          // signUp logic
          createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                // const user = userCredential.user;
                // console.log(userCredential);
                // console.log(user);

                setErrorMessage("SignUp successfull");
                updateProfile(userCredential.user.auth.currentUser, {displayName: name.current.value})
                    .then(() => {
                        // Profile updated!
                        const {uid , email , displayName } = userCredential.user.auth.currentUser;
                        dispatch(addUser({uid:uid , email: email , displayName : displayName}));
                    })
                    .catch((error) => {
                        // An error occurred
                    });
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage(errorCode);
            });          

        } else {
          // login logic
          signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // console.log(userCredential);
                // console.log(user);

                setErrorMessage("LogIn successfull");
                const {uid , email , displayName } = userCredential.user.auth.currentUser;
                dispatch(addUser({uid:uid , email: email , displayName : displayName}));
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage(errorCode);
            });          
        }


    }



  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={loginBgLogo} alt='loginBgLogo'/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='text-center absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80'>
           <h1 className='font-bold text-2xl text-white m-4'>{isLoginForm ? "Login" : "SignUp"}</h1>
            {!isLoginForm && <input ref={name} type='text' placeholder='full name' className='rounded-sm p-3 m-2 bg-gray-800'></input>}
            <input ref={email} type='text' placeholder='email' className='rounded-sm p-3 m-2 bg-gray-800'></input>
            <input ref={password} type='password' placeholder='password' className='rounded-sm p-3 m-2 bg-gray-800 '></input>
            <p className='text-red-700'>{errorMessage}</p>
            <button className=' text-white bg-red-600 rounded-md py-3 px-14 m-3' onClick={handleValidation}>{isLoginForm ? "Login" : "SignUp"}</button>
            <p className='text-white my-5 cursor-pointer' onClick={toggleLoginForm} >{isLoginForm ? "Don't have an account?   SignUp" : "Already a registered user?   Login"}</p>
            {!isLoginForm && <div className='rounded-sm mx-6 my-2 p-3 bg-gray-100 text-start w-10/12 text-red-600 text-xs'>Password must contain<ul><li>- At least one digit</li><li>- At least one lowercase letter</li><li>- At least one uppercase letter</li><li>- A minimum length of 8 characters</li></ul></div>}
        </form>
        
    </div>
  )
}

export default Login;