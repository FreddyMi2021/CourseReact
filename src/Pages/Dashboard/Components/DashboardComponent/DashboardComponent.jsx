import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'

import { ALL_DATABASE } from '../../../../services/queries/DatabaseQueries';
import { ALL_ENV } from '../../../../services/queries/EnvironmentQueries';
import { ALL_FRAMEWORK } from '../../../../services/queries/FrameworkQueries';
import { ALL_PROJECT } from '../../../../services/queries/ProjectQueries';
import { LoadingPage } from '../../../LoadingPage/LoadingPage';

import Database from '../Database/Database';
import Environnement from '../Environnement/Environnement';
import Framework from '../Framework/Framework';
import Project from '../Projects/Projects';

export default function DashboardComponent(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, [])

    const {loading: PROJECTLoading,
        error: PROJECTError,
        data: PROJECTdata
    } = useQuery(ALL_PROJECT)

    const {loading: DBLoading,
        error: DBError,
        data: DBData
    } = useQuery(ALL_DATABASE)

    const {loading: FLoading,
        error: FError,
        data: FData
    } = useQuery(ALL_FRAMEWORK)

    const {loading: ENVLoading,
        error: ENVError,
        data: ENVData
    } = useQuery(ALL_ENV)

    if(PROJECTLoading && DBLoading && FLoading && ENVLoading){
        return(
            <LoadingPage/>
        )
    }
    if(PROJECTError && DBError && FError && ENVError){
        return <p>ERROR...</p>
    }

    let listProject = []
    if(PROJECTdata){
        PROJECTdata.allProjects.map(project=>(
            listProject.push(project)
        ))
    }
    let listDB = []
    if(DBData){
        DBData.allDatabases.map(db=>(
            listDB.push(db)
        ))
    }
    const listFramework = []
    if(FData){
        FData.allFrameworks.map(Framework=>(
            listFramework.push(Framework)
        ))
    }

    const EnvList = []
    if(ENVData){
        ENVData.allEnvironments.map(env=>(
            EnvList.push(env)
        ))
    }
    if(loading === false){
        return(
            <>
                
                   <div className="w-full py-6 grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        {
                            listProject !== null ? (
                                <Project listProject={listProject}/>
                            ):(
                                <>
                                </>
                            )
                        }
                        {/* {
                            listFramework !== null ? (
                                <Framework framework={listFramework}/>
                            ):(
                                <>
                                </>
                            )
                        }
                        {
                            listDB !== null ? (
                                <Database listDB={listDB}/>
                            ):(
                                <></>
                            )
                        }
                        {
                            EnvList !== null ? (
                                <Environnement EnvList = {EnvList}/>
                            ):(
                                <></>
                            )
                        } */}
                   </div>
            </>
        )
    }else{
        return(
            <LoadingPage/>
        )
    }
}