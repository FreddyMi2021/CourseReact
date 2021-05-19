import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import {GoAlert} from 'react-icons/go';
import {TiCancel} from 'react-icons/ti';
export const DeleteComfirm = (props) => {
    return(
        <>
            <div className='justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none'>
                <div
                className='relative w-full rounded-lg mx-auto max-w-md'
                style={{ height: 'auto' }}
                >
                    <form className='space-y-4' 
                        // onSubmit={(e) => props.handleSubmit(e)}
                        >
                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                            <div className='flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t'>
                            <h1 className='font-bold text-lg text-gray-500'>
                                Project removal
                            </h1>
                            <button
                                className='p-1 ml-auto bg-red-500 border-0 rounded-lg float-right leading-none outline-none focus:outline-none'
                                onClick={() => props.setShowModal(false)}
                            >
                                <AiFillCloseCircle className='bg-transparent text-white h-6 w-6 block outline-none focus:outline-none' />
                            </button>
                            </div>

                            <div
                            className='p-4 w-fullflex rounded-lg'
                            style={{ height: 'auto' }}
                            >
                                <div className=' w-full'>
                                    <div className='w-full flex items-start justify-between '>
                                        <GoAlert size="3em" className="text-red-500 inline"/>
                                        <label htmlFor="" className="pt-3 text-gray-500 font-bold text-m">
                                            Do you really want to delete &nbsp;
                                            <span className="text-red-600">
                                                {props.name}    
                                            </span> &nbsp;?
                                        </label>
                                    </div>
                            </div>
                            </div>
                            <div className='flex space-x-4 items-start justify-end px-4 p-2 border-t border-solid border-gray-300 rounded-t'>
                                <button
                                    className='bg-red-600 flex w-auto float-right px-2 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-1 shadow hover:shadow-lg outline-none focus:outline-none'
                                    type='submit'
                                    value='Submit'
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={() => props.setShowModal(false)}
                                >   
                                    <span className="capitalize">CANCEL</span>
                                    <span>
                                    <TiCancel
                                        className='ml-4 text-white inline'
                                        size='1.5em'
                                    />
                                    </span>
                                </button>
                                <button
                                    className='bg-green-700 flex w-auto float-right px-2 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-1 shadow hover:shadow-lg outline-none focus:outline-none'
                                    type='submit'
                                    value='Submit'
                                    style={{ transition: 'all .15s ease' }}
                                    onClick={()=>props.removeProject()}
                                >   
                                    <span className="capitalize">validate</span>
                                    <span>
                                    <FaCheckCircle
                                        className='ml-4 text-white inline'
                                        size='1.5em'
                                    />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='opacity-90 fixed inset-0 z-40 bg-red-900'></div>
        </>
    )
}