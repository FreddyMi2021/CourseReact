import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { BiSearch} from 'react-icons/bi'
import { CREATE_SPRINT } from '../../services/Mutations/SprintMutation';
import { ALL_SPRINT } from '../../services/queries/SprintQueries';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { AddSprint } from './Components/Add/AddSprint';
import {ListSprint} from './Components/List/ListSprint'


export const Sprints = ()=> {
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')
    const [team, setTeam] = useState()
    const [status, setStatus] = useState('')
    const [project, setProject] = useState()
    const [environment, setEnvironment] = useState()

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, [])

    const {loading: SPRLoading, error: SPRError, data: SPRData} = useQuery(ALL_SPRINT)

    const [createSprint] = useMutation(CREATE_SPRINT, {
        onCompleted(){
            window.location.href='/sprints'
        }
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name ==='' || description === '' || deadline === '' || team ===''){
            alert("Les champ sont vides");
        }else{
            if(SPRData !== null && SPRData.allSprints !== null){
                createSprint({
                    variables:{
                        name: name,
                        description: description,
                        deadline: deadline,
                        teamNumber: parseInt(team),
                        status: status,
                        projectId: parseInt(project),
                        environmentId: parseInt(environment)
                    }
                })
            }
        }
    }

    if(SPRLoading) return <p>LOADING...</p>
    if(SPRError) return <p>ERROR ...</p>

    const listSprints = []
    if(SPRData){
        SPRData.allSprints.map(sprint=>(
            listSprints.push(<ListSprint
                key={sprint.id}
                id={sprint.id}
                name={sprint.name}
                description={sprint.description}
                deadline={sprint.deadline}
                team={sprint.teamNumber}
                status={sprint.status}
                project={sprint.project ? sprint.project.name : '-'}
                environment={sprint.environment ? sprint.environment.name : '-'}
            />)
        ))
    }

    if(loading === false){
        return(
            <>
                <div className="py-4">
                    <div className="w-full pb-4">
                        <AddSprint
                            name={name}
                            description={description}
                            deadline={deadline}
                            status={status}
                            team={team}
                            project={project}
                            environment={environment}

                            setName={setName}
                            setDescription={setDescription}
                            setDeadline={setDeadline}
                            setStatus= {setStatus}
                            setTeam={setTeam}
                            setProject={setProject}
                            setEnvironment={setEnvironment}

                            handleSubmit={handleSubmit}
                        />
                    </div>
                    <div className="w-full">
                        <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                            <div className="mt-1 w-full md:w-1/3 ">
                                <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                                    Sprints list: &nbsp;
                                    <span className="text-xl text-green-600">
                                        00
                                    </span>
                                </label>
                            </div>
                            <div className="w-full md:w-2/3 space-y-4 md:space-y-0 justify-end md:space-x-4 md:flex flex-wrap">
                                <div className='rounded-lg flex'>
                                    <input
                                        className='rounded-l-lg w-full bg-gray-100 h-10 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                        type='text'
                                        placeholder='Search environment dev'
                                    />
                                    <button className='rounded-r-lg bg-green-600 w-10 h-10  flex justify-end items-center text-green-600 p-2 focus:outline-none hover:text-grey-darkest'>
                                        <BiSearch className='text-gray-100' size='2em' />
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mt-4">
                            <table className='w-full text-center leading-normal'>
                                <thead>
                                    <tr>
                                        
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            Sprint name
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            Description
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            Deadline
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            Team number
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            Status
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            project
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            Environment
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                            View/Update/Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listSprints}
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <LoadingPage/>
        )
    }
}