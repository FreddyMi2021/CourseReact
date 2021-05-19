import React, { useEffect, useState } from 'react';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { AddProject } from './Components/Add/AddProject';
import { ListProject } from './Components/List/ListProject';
import { BiSearch} from 'react-icons/bi'
import { useMutation, useQuery } from '@apollo/client';
import { ALL_PROJECT } from '../../services/queries/ProjectQueries';
import { CREATE_PROJECT } from '../../services/Mutations/ProjectMutation';
export const Projects = () => {
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')
    const [productOwnerId, setProductOwnerId] = useState()

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, [])

    const {loading: PROJECTLoading,
        error: PROJECTError,
        data: PROJECTdata
    } = useQuery(ALL_PROJECT)

    const [createProject] = useMutation(CREATE_PROJECT, {
        onCompleted(){
            setTimeout(()=>{
                window.top.location.reload()
            }, 4000)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name ==='' || description === '' || deadline === ''){
            alert("Les champ sont vides");
        }else{
            if(PROJECTdata !== null && PROJECTdata.allProjects !== null){
                createProject({
                    variables:{
                        name: name,
                        description: description,
                        deadline: deadline,
                        productOwnerId: parseInt(productOwnerId)
                    }
                })
            }
        }
    }

    if(PROJECTLoading) return <p>LOADING...</p>
    if(PROJECTError) return <p>ERROR...</p>

    const listProject = []
    if(PROJECTdata){
        PROJECTdata.allProjects.map(project=>(
            listProject.push(<ListProject
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                deadline={project.deadline}
                po={project.productOwner ? project.productOwner.name : '-'}
            
            />)
        ))
    }

    if(loading === false){
        return(
            <div className="py-4">
                <div className="w-full pb-4">
                    <AddProject
                        name={name}
                        description={description}
                        deadline={deadline}
                        po={productOwnerId}
                        setName={setName}
                        setDescription={setDescription}
                        setDeadline={setDeadline}
                        setProductOwner= {setProductOwnerId}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className="w-full">
                    <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                        <div className="mt-1 w-full md:w-1/3 ">
                            <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                                Projects list: &nbsp;
                                <span className="text-xl text-green-600">
                                    {
                                        listProject.length < 10 ? '0'+listProject.length : listProject.length
                                    }
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
                                        ID
                                    </th>
                                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                        Project name
                                    </th>
                                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                        Description
                                    </th>
                                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                        Deadline
                                    </th>
                                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                        Product owner
                                    </th>
                                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                        View/Update/Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listProject}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        )
    }else{
        return(
            <LoadingPage/>
        )
    }
}