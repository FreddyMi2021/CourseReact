import React, { useState } from 'react';
import {BiSave} from 'react-icons/bi'
import { AiFillCloseCircle, AiOutlineFolderAdd } from 'react-icons/ai';
import {GiSprint, GiClockwork} from 'react-icons/gi'
import {HiStatusOffline} from 'react-icons/hi'
import {BsCalendar, BsListTask} from 'react-icons/bs';
import {FaUsers} from 'react-icons/fa';

import { useQuery } from '@apollo/client';
import { ALL_PROJECT } from '../../../../services/queries/ProjectQueries';
import { ALL_ENV } from '../../../../services/queries/EnvironmentQueries';
export const AddSprint = (props) => {
    const [showModal, setShowModal] = useState(false);

    const {loading, error, data} = useQuery(ALL_PROJECT)
    const {loading:ENVLoading, error:ENVError, data:ENVData} = useQuery(ALL_ENV)

    if(loading && ENVLoading) return <p>LOADING...</p>
    if(error && ENVError) return <p>ERROR...</p>

    const listPro = []
    if(data){
        data.allProjects.map(pro=>(
            listPro.push(<option key={pro.id} value={pro.id}>{pro.name}</option>)
        ))
    }

    const listEnv = []
    if(ENVData){
        ENVData.allEnvironments.map(env=>(
            listEnv.push(<option key={env.id} value={env.id}>{env.name}</option>)
        ))
    }
    return(
        <>
            <div className="w-full">
                <div className='w-full md:flex items-start justify-between rounded-t'>
                    
                    <div className="w-full md:space-y-0 justify-end md:flex flex-wrap">
                            <button
                                className='bg-green-700 flex w-auto float-right px-2 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-2 shadow hover:shadow-lg outline-none focus:outline-none'
                                type='submit'
                                value='Submit'
                                style={{ transition: 'all .15s ease' }}
                                onClick={() => setShowModal(true)}
                            >
                                <span>Create sprint</span>
                                <span>
                                <AiOutlineFolderAdd
                                    className='ml-4 text-white inline'
                                    size='1.5em'
                                />
                                </span>
                            </button>
                    </div>
                </div>
                <div className='relative w-full'>
                    {showModal ? (
                        <>
                            <div className='justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none'>
                                <div
                                className='relative w-full rounded-lg mx-auto max-w-2xl'
                                style={{ height: 'auto' }}
                                >
                                    <form className='space-y-4' 
                                        onSubmit={(e) => props.handleSubmit(e)}
                                        >
                                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                            <div className='flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t'>
                                            <h1 className='font-bold text-lg uppercase text-gray-500'>
                                                Sprint
                                            </h1>
                                            <button
                                                className='p-1 ml-auto bg-red-500 border-0 rounded-lg float-right leading-none outline-none focus:outline-none'
                                                onClick={() => setShowModal(false)}
                                            >
                                                <AiFillCloseCircle className='bg-transparent text-white h-6 w-6 block outline-none focus:outline-none' />
                                            </button>
                                            </div>

                                            <div
                                            className='p-4 w-full md:flex rounded-lg'
                                            style={{ height: 'auto' }}
                                            >
                                                <div className=' w-full'>
                                                    <div className='w-full '>
                                                        <div className="w-full space-y-4">
                                                            <fieldset>
                                                                <div className='w-full flex'>
                                                                    <span className='input bg-gray-200 w-12  flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                                                                        <GiSprint className='text-green-600' size='2em' />
                                                                    </span>
                                                                    <input
                                                                        className='input w-full bg-gray-100 h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                                                        type='text'
                                                                        placeholder='Sprint name'
                                                                        value={props.name}
                                                                        onChange={(e) => props.setName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </fieldset>
                                                            <fieldset>
                                                                <div className='w-full flex'>
                                                                    <span className='input bg-gray-200 w-12  flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                                                                        <BsListTask className='text-green-600' size='2em' />
                                                                    </span>
                                                                    <textarea
                                                                        className='resize-y px-5 py-2 w-full bg-gray-100  h-24 text-gray-500 font-semibold outline-none focus:outline-none'
                                                                        placeholder='Sprint description'
                                                                        value={props.description}
                                                                        onChange={(e) => props.setDescription(e.target.value)}
                                                                    ></textarea>
                                                                       
                                                                </div>
                                                            </fieldset>
                                                            <div className="w-full space-x-4 flex">
                                                                <div className="w-1/2">
                                                                    <fieldset>
                                                                        <div className='w-full flex'>
                                                                            <span className='input bg-gray-200 w-12  flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                                                                                <BsCalendar className='text-green-600' size='2em' />
                                                                            </span>
                                                                            <input
                                                                                className='input w-full bg-gray-100 h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                                                                type='date'
                                                                                placeholder='Sprint deadline'
                                                                                value={props.deadline}
                                                                                onChange={(e) => props.setDeadline(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <fieldset>
                                                                        <div className='w-full flex'>
                                                                            <span className='input bg-gray-200 w-12  flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest'>
                                                                                <FaUsers className='text-green-600' size='2em' />
                                                                            </span>
                                                                            <input
                                                                                className='input w-full bg-gray-100 h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                                                                type='text'
                                                                                placeholder='Team number'
                                                                                value={props.team}
                                                                                onChange={(e) => props.setTeam(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            <div className="w-full space-x-4 flex">
                                                                <div className="w-1/2">
                                                                     <fieldset
                                                                        className="w-full"
                                                                    >
                                                                        <div className="w-full flex">
                                                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                                                <HiStatusOffline className="text-green-600" size="2em" />
                                                                            </span>
                                                                            <select
                                                                                value={props.status}
                                                                                onChange={(e) => props.setStatus(e.target.value)}
                                                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                                                            >
                                                                                <option value="...">Select status</option>
                                                                                <option value="inabled">Inabled</option>
                                                                                <option value="desabled">Desabled</option>
                                                                                
                                                                            </select>
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <fieldset
                                                                        className="w-full"
                                                                    >
                                                                        <div className="w-full flex">
                                                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                                                <GiClockwork className="text-green-600" size="2em" />
                                                                            </span>
                                                                            <select
                                                                                value={props.project}
                                                                                onChange={(e) => props.setProject(e.target.value)}
                                                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                                                            >
                                                                                <option value="...">Select project</option>
                                                                                {
                                                                                listPro
                                                                                }
                                                                            </select>
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            <fieldset
                                                                className="w-full"
                                                            >
                                                                <div className="w-full flex">
                                                                    <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                                        <GiClockwork className="text-green-600" size="2em" />
                                                                    </span>
                                                                    <select
                                                                        value={props.environment}
                                                                        onChange={(e) => props.setEnvironment(e.target.value)}
                                                                        className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                                                    >
                                                                        <option value="...">Select environment</option>
                                                                        {
                                                                        listEnv
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </fieldset>
                                                            
                                                        </div>
                                                    </div>
                                            </div>
                                            </div>
                                            <div className='flex items-start justify-end px-4 p-2 border-t border-solid border-gray-300 rounded-t'>
                                                <button
                                                    className='bg-green-700 flex w-auto float-right px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-2 shadow hover:shadow-lg outline-none focus:outline-none'
                                                    type='submit'
                                                    value='Submit'
                                                    style={{ transition: 'all .15s ease' }}
                                                >
                                                    <span>Save</span>
                                                    <span>
                                                    <BiSave
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
                            <div className='opacity-90 fixed inset-0 z-40 bg-green-900'></div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    )
}