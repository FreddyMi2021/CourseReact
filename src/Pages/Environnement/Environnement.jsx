import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { BiSearch} from 'react-icons/bi'

import { CREATE_ENVIRONNEMENT_CMS, CREATE_ENVIRONNEMENT_FRAMEWORK } from '../../services/Mutations/EnvironnementMutation';
import {ALL_ENV} from '../../services/queries/EnvironmentQueries';
import { AddEnv } from './Components/Add/AddEnv';
import { ListEnv } from './Components/List/ListEnv';
const Environnement = ()=>{
    const [name, setName] = useState('')
    const [languageId, setLanguageId] = useState();
    const [dbId, setDbId] = useState();
    const [frameworkId, setFrameworkId] = useState();
    const [cmsId, setCmsId] = useState()
    const [poId, setPOId] = useState();

    const {loading: ENVLoading, error: ENVError, data:ENVData} = useQuery(ALL_ENV)
    const [createEnv] = useMutation(CREATE_ENVIRONNEMENT_FRAMEWORK, {
        onCompleted(){
            setTimeout(() => {
                window.top.location.reload()
                }, 1000)
        }
    })
    const [createENVCMS] = useMutation(CREATE_ENVIRONNEMENT_CMS, {
        onCompleted(){
            setTimeout(() => {
                window.top.location.reload()
                }, 1000)
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault(e)
        if(name === '' || languageId === '' || dbId === '' || frameworkId === ''){
            alert("Les champs sont vides")
        }else{
            if(ENVData !== null && ENVData.allEnvironments !== null){
                if(frameworkId){
                    createEnv({
                        variables:{
                            name: name,
                            programmingLanguageId:parseInt(languageId),
                            databaseId:parseInt(dbId),
                            frameworkId:parseInt(frameworkId),
                            productOwnerId:parseInt(poId)
                        }
                    })
                }
                if(cmsId){
                    createENVCMS({
                        variables:{
                            name: name,
                            programmingLanguageId:parseInt(languageId),
                            databaseId:parseInt(dbId),
                            contentManagementSystemId:parseInt(cmsId),
                            productOwnerId:parseInt(poId)
                        }
                    })
                }
            }
        }

    }

    if(ENVLoading) return <p>LOADING...</p>
    if(ENVError) return <p>Error...</p>

    const ListEnvr = []
    if(ENVData !== null && ENVData.allEnvironments !== null && ENVData !== undefined){
        ENVData.allEnvironments.map((env) => (
            ListEnvr.push(<ListEnv
                key={env.id}
                id={env.id}
                name={env.name}
                language={env.programmingLanguage ? env.programmingLanguage.name : '-'}
                framework={env.framework ? env.framework.name : '-'}
                cms = {env.contentManagementSystem ? env.contentManagementSystem.name : '-'}
                database={env.database ? env.database.name : '-'}
                po={env.productOwner ? env.productOwner.name : '-'}
            />)
        ))
    }else{
        <h1>No environment</h1>
    }
    
    return(
        <div className="py-4">
            <div className="w-full pb-4">
                <AddEnv
                    name={name}
                    languageId={languageId}
                    db={dbId}
                    framework={frameworkId}
                    cmsId={cmsId}
                    po={poId}
                    setName={setName}
                    setLanguageId={setLanguageId}
                    setDbId={setDbId}
                    setFrameworkId={setFrameworkId}
                    setCmsId={setCmsId}
                    setPOId={setPOId}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="w-full">
                <div className='w-full bg-gray-200 md:flex items-start justify-between px-4 p-2 rounded-t'>
                    <div className="mt-1 w-full md:w-1/3 ">
                        <label htmlFor="" className="text-lg uppercase font-bold text-gray-500">
                            Environment list: &nbsp;
                            <span className="text-xl text-green-600">
                                {ListEnvr.length < 10 ? '0'+ListEnvr.length : ListEnvr.length}
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
                                Environment name
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Language
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Framework
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Cms
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Database
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Product owner
                            </th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                                Update/Delete
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            ListEnvr
                        }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}
export default Environnement;