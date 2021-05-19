import React from 'react'
import {VscLoading} from 'react-icons/vsc'
export const LoadingPage = ()=>{
    return(
        <div className='opacity-90 animate-pulse pl-16 fixed inset-0 z-40 m-auto bg-green-900'>
            <div className="md:w-1/2 mx-auto py-80 mb-auto mt-auto text-center">
                <VscLoading size="6rem" className="mx-auto animate-spin text-gray-200"/>
            </div>
        </div>
    )
}