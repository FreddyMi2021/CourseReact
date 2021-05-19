import React, { useState } from 'react'
import {BiSave, BiUserCheck} from 'react-icons/bi'
import {HiCode} from 'react-icons/hi'
import { AiFillCloseCircle, AiOutlineQrcode, AiOutlineDatabase, AiOutlineFolderAdd } from 'react-icons/ai';
import {BsFileCode} from 'react-icons/bs';
import { useQuery } from '@apollo/client';
import { ALL_LANGUAGE } from '../../../../services/queries/LanguageProgrammationQueries';
import { ALL_PO } from '../../../../services/queries/ProductOwnerQueries';
import { ALL_DATABASE } from '../../../../services/queries/DatabaseQueries';
import { ALL_FRAMEWORK } from '../../../../services/queries/FrameworkQueries';
import { ALL_CMS } from '../../../../services/queries/CmsQueries';

export const AddEnv = (props) => {
    const [showModal, setShowModal] = useState(false);

    const {loading: LPLoading, error: LPError,data: LPData} = useQuery(ALL_LANGUAGE)
    const {loading: DBLoading, error: DBError,data: DBData} = useQuery(ALL_DATABASE)
    const {loading: POLoading, error: POError,data: POData} = useQuery(ALL_PO)
    const {loading: FWLoading, error: FWError,data: FWData} = useQuery(ALL_FRAMEWORK)
    const {loading: CMSLoading, error: CMSError,data: CMSData} = useQuery(ALL_CMS)
    
    if(LPLoading && DBLoading && POLoading && FWLoading && CMSLoading) return <p>LOAD0ING...</p>
    if(LPError && DBError && POError && FWError && CMSError) return <p>ERROR...</p>

    return(
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
                            <span>Add environment</span>
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
                        development environment
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
                                                <AiOutlineQrcode className='text-green-600' size='2em' />
                                            </span>
                                            <input
                                                className='input w-full bg-gray-100 h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none'
                                                type='text'
                                                placeholder='Environment name'
                                                value={props.name}
                                                onChange={(e) => props.setName(e.target.value)}
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        className="w-full"
                                      >
                                        <div className="w-full flex">
                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                <HiCode className="text-green-600" size="2em" />
                                            </span>
                                            <select
                                                value={props.languageId}
                                                onChange={(e) => props.setLanguageId(e.target.value)}
                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                            >
                                                <option value="...">Select an language</option>
                                                {
                                                LPData.allProgrammingLanguages.map(lp=>(
                                                    <option key={lp.id} value={lp.id}>{lp.name}</option>
                                                ))
                                                }
                                            </select>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        className="w-full"
                                      >
                                        <div className="w-full flex">
                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                <BsFileCode className="text-green-600" size="2em" />
                                            </span>
                                            <select
                                                value={props.framework}
                                                onChange={(e) => props.setFrameworkId(e.target.value)}
                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                            >
                                                <option value="...">Select framework</option>
                                                {
                                                    FWData.allFrameworks.map(fw=>(
                                                        <option key={fw.id} value={fw.id}>{fw.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </fieldset>

                                    <fieldset
                                        className="w-full"
                                      >
                                        <div className="w-full flex">
                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                <BsFileCode className="text-green-600" size="2em" />
                                            </span>
                                            <select
                                                value={props.cmsId}
                                                onChange={(e) => props.setCmsId(e.target.value)}
                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                            >
                                                <option value="...">Select cms</option>
                                                {
                                                    CMSData.allCms.map(cms=>(
                                                        <option key={cms.id} value={cms.id}>{cms.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </fieldset>

                                    <fieldset
                                        className="w-full"
                                      >
                                        <div className="w-full flex">
                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                <AiOutlineDatabase className="text-green-600" size="2em" />
                                            </span>
                                            <select
                                                value={props.db}
                                                onChange={(e) => props.setDbId(e.target.value)}
                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                            >
                                                <option value="...">Select database</option>
                                                {
                                                DBData.allDatabases.map(db=>(
                                                    <option key={db.id} value={db.id}>{db.name}</option>
                                                ))
                                                }
                                            </select>
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        className="w-full"
                                      >
                                        <div className="w-full flex">
                                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                                                <BiUserCheck className="text-green-600" size="2em" />
                                            </span>
                                            <select
                                                value={props.po}
                                                onChange={(e) => props.setPOId(e.target.value)}
                                                className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                                            >
                                                <option value="...">Select product owner</option>
                                                {
                                                POData.allProductOwners.map(po=>(
                                                    <option key={po.id} value={po.id}>{po.name}</option>
                                                ))
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
    )
}