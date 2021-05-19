import React from 'react'
import {AiFillDatabase} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Database = (props)=> {
    return(
        <Link to='/database' className="w-full h-28 flex bg-indigo-700 rounded-sm shadow-md">
            <div className="flex rounded-l-md items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-20 h-28 text-red-500">
                <AiFillDatabase className="text-white" size="4rem"/>
            </div>
            <div className="w-full  z-0 rounded-r-md border-l-2 border-gray-50 flex-grow p-2">
                <div className="flex text-center flex-col flex-grow px-2">
                    <label className="text-center text-gray-50 uppercase font-bold" style={{fontSize:"20px"}}>
                        Databases
                    </label>
                </div>
                <div className="w-full h-1 bg-gray-50"></div>
                <div className="mx-auto">
                    <div className="text-center mt-auto mb-auto text-gray-50 font-bold" style={{fontSize:"3rem"}}>
                    {props.listDB.length < 10 ? '0'+props.listDB.length : props.listDB.length}
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Database;