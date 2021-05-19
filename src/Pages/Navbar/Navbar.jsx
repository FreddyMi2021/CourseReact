import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlineDashboard, AiOutlineQrcode } from 'react-icons/ai'
import { BiLogInCircle, BiCreditCardFront, BiCodeBlock} from 'react-icons/bi';
import {FaBars} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import {GiSprint, GiClockwork} from 'react-icons/gi';
import './Css/Navbar.css'
import axios from 'axios';
import Chevron from './Chevron/Chevron';
const Navbar = ()=>{
  let admin = JSON.parse(localStorage.getItem('currentAdmin'));
  const [isOpen, setIsOpen] = useState(false)

  const [active, setActive] = useState("")
  const [height, setHeight] = useState("0px")
  const [rotate, setRotate] = useState("accordion_icon")
  const content = useRef(null);

  function toggleAccordion(){
      setActive(active === "" ? "active" : "")
      setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
      setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
      console.log(content.current.scrollHeight)
  }

  const handlsubmit = ()=>{
    setIsOpen(!isOpen)
  }

  function logout() {
    axios({
      url: 'http://localhost:4000/admin/sign_out',
      method: 'delete'
      
    })
      .then((result) => {
        if (result.status === 200) {
          localStorage.removeItem('currentAdmin');

          window.location.href = '/login_page';
        }
      })
      .catch(function (error) {
        console.log(error);
        localStorage.removeItem('currentAdmin');

        window.location.href = '/login_page';
      });
      if(admin === null){
        window.location.href = '/login_page';
      }
  }

    return(
      
      <>
      
        {
          isOpen ? (
            <div className="fixed z-50 w-64 transition-all duration-150 ease-out h-screen flex flex-shrink-0">
              <div className="flex flex-col w-64 bg-green-800">
                <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                  <div className="flex h-16 items-center justify-between flex-shrink-0 px-4 ">
                    <Link to='/'>
                      <img
                        src='Logo/sayna.png'
                        alt='logo'
                        className='h-6'
                      />
                    </Link>
                    <AiOutlineMinusCircle 
                      size="2em" 
                      onClick={()=>handlsubmit()}
                      className="text-white cursor-pointer text-right" 
                    />
                  </div>
                  <nav className="flex-1 border-t border-gray-200 bg-green-800">

                    <Link to="/" className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150">
                        <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineDashboard size="1em" className="inline" />
                          </div>
                        </div>
                        Dashboard
                    </Link>
                    <Link to='/projects'
                      className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <GiClockwork size="1em" className="inline" />
                          </div>
                        </div>
                        Projects
                    </Link>
                    <Link to="/sprints" className="links group flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150">
                        <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <GiSprint size="1em" className="inline" />
                          </div>
                        </div>
                        Sprint
                    </Link>
                    
                    <div className="links group cursor-pointer flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                      onClick={toggleAccordion}
                    >
                        <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <AiOutlineQrcode size="1em" className="inline" />
                          </div>
                        </div>
                        Environment
                        <Chevron className={`${rotate}`} size={"1em"} color={"#f2f2f2"} position={"right"}/>
                    </div>
                      
                    
                    
                    <div
                        ref={content}
                        style={{maxHeight:`${height}`}}
                        className="accordion_content">
                            
                        <div className='border-t border-green-600 w-full justify-items-auto bg-opacity-50 bg-green-700'>
                          <Link to='/front_end_page'
                              className="links group pl-12 flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                            >
                              <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                                <div
                                    className='font-bold text-lg text-white font-bold'
                                    style={{ lineHeight: '1.8rem' }}
                                >
                                    <BiCreditCardFront size="1em" className="inline" />
                                </div>
                              </div>
                              Front-end
                            </Link>
                            <Link to='/back_end_page'
                              className="links group pl-12 flex items-center px-4 py-4 text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                            >
                              <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                                <div
                                    className='font-bold text-lg text-white font-bold'
                                    style={{ lineHeight: '1.8rem' }}
                                >
                                    <BiCodeBlock size="1em" className="inline" />
                                </div>
                              </div>
                              Back-end
                            </Link>
                        </div>                       
                    </div>
                    
                  </nav>
                  <div className="border-t border-gray-50">
                    
                    <Link to='/login_page'
                      className="links group py-4 text-gray-200 flex items-center px-4 text-sm leading-5 font-medium hover:text-white focus:outline-none hover:bg-green-700 focus:bg-green-700 transition ease-in-out duration-150"
                      onClick={() => logout()}
                    >
                        <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <BiLogInCircle size="1em" className="inline text-red-500" />
                          </div>
                        </div>
                        Log out
                    </Link>
                    <Link to='/'
                      className="links group py-4 text-gray-200 flex items-center px-4 text-sm leading-5 font-medium hover:text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                    >
                        <div className='icons w-8 h-8 rounded-md bg-green-700 text-center mr-2'>
                          <div
                              className='font-bold text-lg text-white font-bold'
                              style={{ lineHeight: '1.8rem' }}
                          >
                              <ImProfile size="1em" className="inline text-gray-50" />
                          </div>
                        </div>
                        My profile
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          ):(
            <div className="fixed z-50 w-16 transition-all duration-150 ease-out h-screen flex flex-shrink-0">
              <div className="flex flex-col w-64 bg-green-800">
                <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                  <div className="flex h-16 border-b border-gray-200 items-center justify-between flex-shrink-0 px-4 ">
                    <FaBars 
                      size="2em" 
                      onClick={()=>handlsubmit()}
                      className="text-white cursor-pointer text-right" 
                    />
                  </div>
                  <nav className="space-y-4 pt-5 flex-1 mx-auto bg-green-800">

                    <Link to="/" className="links group h-10 w-10 rounded-full bg-green-700 m-auto flex  items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150">
                        <AiOutlineDashboard size="1.8em" className="m-auto icone" />
                    </Link>
                    <Link to='/projects'
                      className="links group flex h-10 w-10 rounded-full bg-green-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                    >
                        <GiClockwork size="1.8em" className="m-auto"/>
                    </Link>
                    <Link to="/sprints" className="link group h-10 w-10 rounded-full bg-green-700 flex items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150">
                        <GiSprint size="1.8em" className="m-auto" />
                    </Link>
                    
                    <div to='/'
                      className="link group cursor-pointer flex h-10 w-10 rounded-full bg-green-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                      onClick={toggleAccordion}
                    >
                        <AiOutlineQrcode size="1.8em" className="m-auto"/>
                    </div>
                    <div
                        ref={content}
                        style={{maxHeight:`${height}`}}
                        className="accordion_content">
                            
                        <div className='border-t border-green-600  py-4 space-y-4 w-full justify-items-auto'>
                          <Link to='/front_end_page'
                            className="links group flex h-10 w-10 rounded-full bg-green-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                          >
                              <BiCreditCardFront size="1.8em" className="m-auto"/>
                          </Link>
                          <Link to="/back_end_page" className="link group h-10 w-10 rounded-full bg-green-700 flex items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150">
                              <BiCodeBlock size="1.8em" className="m-auto" />
                          </Link>
                        </div>                       
                    </div>
                    
                  </nav>
                  <div className=" border-t border-gray-50">
                    
                    <div className="space-y-4 py-4 mx-auto">
                      <Link to='/login_page'
                        className="links group flex h-10 w-10 rounded-full bg-green-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                        onClick={() => logout()}
                      >
                          <BiLogInCircle size="1.5em" className="text-red-500 m-auto"/>
                      </Link>
                      <Link to='/'
                        className="links group flex h-10 w-10 rounded-full bg-green-700 m-auto items-center text-sm leading-5 font-medium text-white focus:outline-none focus:bg-green-700 hover:bg-green-700 transition ease-in-out duration-150"
                      >
                          <ImProfile size="1.5em" className="text-gray-50 m-auto"/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          )
        }
      </>

    )
}
export default Navbar;