import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SiLastpass} from 'react-icons/si'
import {HiOutlineMail} from 'react-icons/hi'
import { LoadingPage } from '../LoadingPage/LoadingPage';
export function LoginPage() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, [])

    function postLogin() {
        setIsLoading(true);
        
        axios
        .post('http://localhost:4000/admin/sign_in', {
            email,
            password,
        })
        .then((result) => {
            if (result.status === 200) {
                localStorage.setItem(
                'currentAdmin',
                JSON.stringify({ data: result.data, authData: result.headers })
                );
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        setIsLoading(false);
        })
        
        .catch((e) => {
            setIsError(true);
            setIsLoading(false);
        });
        if(email === '' && password === ''){
            alert("Les champ sont vide")
        }else if(email === ''){
            alert("Le champs email est vide")
        }
        else if(password ===''){
            alert("Le champs password est vide")
        }
    }
    

    if (isLoggedIn) {
        window.location.href = '/';
    }

    if(loading === false){
        return (
            <div className='flex flex-col h-screen'>
                <div className='grid place-items-center mx-2 sm:my-auto'>
                    <div
                    className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-gray-700 rounded-lg shadow-md lg:shadow-lg'
                    >   
                        <div className="w-full text-center">
                            <label htmlFor="" className="text-xl font-bold text-gray-100">
                                Sign in
                            </label>
                        </div>
                        <form className='mt-10' onSubmit={(e) => {
                            e.preventDefault();
                            postLogin();
                            }}
                        >
                            
                            <div className="space-y-4">
                                <div className='rounded-lg flex'>
                                    <label className='rounded-l-lg bg-gray-400 w-10 h-10  flex justify-end items-center text-green-600 p-2 focus:outline-none hover:text-grey-darkest'>
                                        <HiOutlineMail className='text-gray-100' size='2em' />
                                    </label>
                                    <input
                                        className='rounded-r-lg w-full bg-gray-100 h-10 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Email adress'
                                        
                                    />
                                    
                                </div>
                                <div className='rounded-lg flex'>
                                    <label className='rounded-l-lg bg-gray-400 w-10 h-10  flex justify-end items-center text-green-600 p-2 focus:outline-none hover:text-grey-darkest'>
                                        <SiLastpass className='text-gray-100' size='2em' />
                                    </label>
                                    <input
                                        className='rounded-r-lg w-full bg-gray-100 h-10 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Password'
                                    />
                                    
                                </div>
                            </div>
                            
                            <div className="w-full">
                                <button
                                type='submit'
                                className='w-1/2 float-right text-center px-4 py-2 mt-10 bg-gray-300 rounded-lg transition duration-150 ease
                                    font-extrabold text-gray-700 uppercase
                                    focus:outline-none hover:bg-gray-50 hover:shadow-none'
                                disabled={isLoading}
                                >
                                Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <LoadingPage/>
        )
    }
}
