import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { GrLogout } from 'react-icons/gr'

import { AiOutlineBars } from 'react-icons/ai'
import DashboardLink from './DashboardLink'

import { FaHome } from 'react-icons/fa'
import { AuthContext } from '../../AuthProvider/AuthProviders'



const Sidebar = () => {
    const navigate = useNavigate()

    const { user, logOut } = useContext(AuthContext)

 

    const [isActive, setActive] = useState('false')

 

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }









  

    return (
        <>

            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>



               


            


                    <div className='block cursor-pointer p-4 font-bold'>



                        <h1 className="font-bold flex items-center w-full"><span className="text-2xl text-gradient flex items-center"> Crud </span>  <sub className="font-mono md:w-0 w-1 text-sm ml-1"><small>Operation</small></sub></h1>

                    </div>

                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}

            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >













                <div>
                    {/* Branding & Profile Info */}




                    <div>

                      <div className='flex items-center space-x-8'>
                        
                        <div className='w-full hidden md:flex py-2 justify-center items-center mx-auto'>
                        <h1 className="font-bold flex items-center w-full">Menu Items</h1>
                        </div>
                      </div>





                        <div className='flex flex-col items-center mt-6 -mx-2'>

                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>

                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>

                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}


                    <div className='flex flex-col justify-between flex-1 mt-6'>

                        <nav>

                          <DashboardLink></DashboardLink>

                        




                        </nav>


                    </div>


                </div>

                <div>
                    <hr />


                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FaHome className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>

                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
