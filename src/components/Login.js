import React, { useState } from 'react'
import Header from './Header';
import loginBgLogo from "../utils/loginBgLogo.jpg"

const Login = () => {
    const [isLoginForm,setIsLoginForm] = useState(true);

    const toggleLoginForm = () => {
        setIsLoginForm(!isLoginForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={loginBgLogo} alt='loginBgLogo'/>
        </div>
        <form className='text-center absolute p-10 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80'> 
           <h1 className='font-bold text-2xl text-white m-4'>{isLoginForm ? "Login" : "SignUp"}</h1>
            {!isLoginForm && <input type='text' placeholder='full name' className='rounded-sm p-3 m-2 bg-gray-800'></input>}
            <input type='text' placeholder='email' className='rounded-sm p-3 m-2 bg-gray-800'></input>
            <input type='password' placeholder='password' className='rounded-sm p-3 m-2 bg-gray-800 '></input>
            <button className=' text-white bg-red-600 rounded-md py-3 px-14 m-3'>{isLoginForm ? "Login" : "SignUp"}</button>
            <p className='text-white my-5 cursor-pointer' onClick={toggleLoginForm} >{isLoginForm ? "Don't have an account?   SignUp" : "Already a registered user?   Login"}</p>
        </form>
        
    </div>
  )
}

export default Login;