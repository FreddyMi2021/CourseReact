import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {FaTrashAlt, FaCheckCircle} from 'react-icons/fa';
import {MdUpdate} from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import {GoAlert} from 'react-icons/go';
import {TiCancel} from 'react-icons/ti';

import { DESTROY_ENVIRONNEMENT } from '../../../../services/Mutations/EnvironnementMutation';
export const ListEnv = (props)=>{
    const [showModal, setShowModal] = useState(false);

    const [deleteEnv] = useMutation(DESTROY_ENVIRONNEMENT, {
        onCompleted:()=>{
            window.location.href='/environment'
        }
    })

    const deleteBTN = () => {
        deleteEnv({
            variables: {
                id: props.id
            }
        })
    }
    return(
        <>
            <tr key={props.id}>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.id}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.language}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.framework}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.cms}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.database}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.po}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm md:space-x-2'>
            
                <button
                    className='bg-green-700 w-auto p-1 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none'
                    type='submit'
                    value='Submit'
                    style={{ transition: 'all .15s ease' }}
                >
                    <span>
                        <MdUpdate
                            className='text-white inline'
                            size='1.5em'
                        />
                    </span>
                </button>
                <button
                    className='bg-red-700 w-auto p-1 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none'
                    type='submit'
                    value='Submit'
                    style={{ transition: 'all .15s ease' }}
                    onClick={()=>setShowModal(true)}
                >
                    <span>
                        <FaTrashAlt
                            className='text-white inline'
                            size='1.5em'
                        />
                    </span>
                </button>
                
            </td>
        </tr>
        {showModal ? (
            <>
              <div className='justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none'>
                <div
                  className='relative w-full rounded-lg mx-auto max-w-md'
                  style={{ height: 'auto' }}
                >
                <form className='space-y-4' 
                            onSubmit={(e) => props.handleSubmit(e)}
                            >
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    <div className='flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t'>
                      <h1 className='font-bold text-lg text-gray-500'>
                        Environment removal
                      </h1>
                      <button
                        className='p-1 ml-auto bg-red-500 border-0 rounded-lg float-right leading-none outline-none focus:outline-none'
                        onClick={() => setShowModal(false)}
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
                            onClick={() => setShowModal(false)}
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
                            onClick={()=>deleteBTN()}
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
          ) : null}
        </>
    )
}