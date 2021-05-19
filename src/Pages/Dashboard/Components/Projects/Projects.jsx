import React from 'react';
import {GiClockwork} from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Project = (props) => {
    return(
        <>
            <Link to='/projects' className="w-full h-28 flex bg-green-500 rounded-sm shadow-md">
                <div className="flex rounded-l-md items-center bg-green-500 justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 h-28 text-red-500">
                    <GiClockwork className="text-white" size="4rem"/>
                </div>
                <div className="w-full bg-green-500 z-0 rounded-r-md border-l-2 border-gray-50 flex-grow p-2">
                    <div className="flex text-center flex-col flex-grow px-2">
                        <label className="text-center text-gray-50 uppercase font-bold" style={{fontSize:"20px"}}>
                            Projects
                        </label>
                    </div>
                    <div className="w-full h-1 bg-gray-50"></div>
                    <div className="mx-auto">
                        <div className="text-center mt-auto mb-auto text-gray-50 font-bold" style={{fontSize:"3rem"}}>
                        {props.listProject.length < 10 ? '0'+props.listProject.length : props.listProject.length}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Project;