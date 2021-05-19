import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import {MdUpdate} from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { DeleteComfirm } from './DeleteComfirme/DeleteComfirme';
import { useMutation } from '@apollo/client';
import { DESTROY_PROJECT } from '../../../../services/Mutations/ProjectMutation';
export const ListProject = (props) => {
    const [showModal, setShowModal] = useState(false);

    const [deleteproject] = useMutation(DESTROY_PROJECT, {
        onCompleted(){
            window.location.href='/projects'
        }
    })

    const removeProject = ()=>{
        deleteproject({
            variables:{
                id:parseInt(props.id)
            }
        })
    }
    return(
        <>
            <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.id}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {props.description.split('').length <= 50 ? props.description : props.description.slice(0, 50) + ' ...'}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.deadline}</p>
            </td>
            
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{props.po}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm md:space-x-2'>
                <button
                    className='bg-indigo-700 w-auto p-1 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none'
                    type='submit'
                    value='Submit'
                    style={{ transition: 'all .15s ease' }}
                >
                    <span>
                        <AiFillEye
                            className='text-white inline'
                            size='1.5em'
                        />
                    </span>
                </button>
                <button
                    className='bg-green-600 w-auto p-1 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none'
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
                <DeleteComfirm name={props.name} setShowModal={setShowModal} showModal={showModal} removeProject={removeProject} />
            </>
          ) : null}
        </>
    )
}