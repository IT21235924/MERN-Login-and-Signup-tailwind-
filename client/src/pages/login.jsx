import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import COVER_IMAGE from '/astronaut.jpg'
import NASA_LOGO from '/nasa.svg'

function login() {

    const [email, SetuserEmail] = useState("")
    const [password, SetuserPassword] = useState("")
    const navigate = useNavigate();

    function sendData(event) {
        event.preventDefault();

        const newUser = {
            email,
            password
        }

        console.log(newUser)

        axios.post("http://localhost:5000/api/auth/login", newUser).then(() => {
            toast("Login successfull!")
            navigate('/apod')
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className="w-full min-h-screen flex item-start">
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className="absolute top-[15%] left-[10%] flex flex-col">
                <h1 className='text-4xl text-white font-bold my-4'>Explore the Universe.</h1>
                <p className='text-xl text-white font-normal'>Unlock the Wonders of Space.</p>
            </div>
            <img src={COVER_IMAGE} className="w-full h-full object-cover" />
        </div>

        <div className='w-1/2  h-full flex flex-col p-20 justify-between items-center'>
            <h1 className='w-full max-w-[500px] mx-auto text-xl text-white font-semibold mr-auto'><img className='h-10 inline' src={NASA_LOGO}/>  NASA API Project.</h1>

            <div className='w-full flex flex-col max-w-[500px]'>

                <div className='w-full flex flex-col mb-2 '>                
                    <h3 className='text-3xl font-semibold mb-2'>Sign In</h3>
                    <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>                    
                </div>

                <div className='w-full flex flex-col'>
                        <input
                        id='email'
                        type='email'
                        placeholder='Email'
                        className='w-full text-white py-2 my-4 bg-transparent border-b border-white outline-none focus:outline-none'
                        required
                            onChange={(event) => {
                                SetuserEmail(event.target.value)
                            }}/>

                        <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        className='w-full text-white py-2 my-4 bg-transparent border-b border-white outline-none focus:outline-none'
                        required
                            onChange={(event) => {
                                SetuserPassword(event.target.value)
                            }}/>
                </div>

                <div className='w-full flex-col my-4'>
                    <button className='w-full text-white my-2 font-semibold bg-[#0099ff] rounded-md p-4 text-center flex item-center justify-center'
                    onClick={sendData}>
                        Log in 
                    </button>
                    <ToastContainer />
                </div>

            </div>

            <div className='w-full flex item-center justify-center'>
                <p className='text-sm font-normal'>Don't have a account? <Link to='/signup'><span className='font-semibold text-[#0099ff] underline underline-offset-2 cursor-pointer'>Sign up for free</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default login