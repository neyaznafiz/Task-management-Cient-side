// import { signOut } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/firebase.init';

const Navbar = ({ children }) => {

    const [dark, setDark] = useState(false)
    const [user] = useAuthState(auth)
    // console.log(user);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    return (
        <div className="drawer drawer-end" data-theme={dark ? "dark" : "light"}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-100 md:px-20 flex justify-between fixed-top">

                    <Link to='/'>
                        <div>
                            <img src="https://i.ibb.co/7WqkZT8/logo-nav.png" alt="" className='w-[37px]' />
                        </div>
                        <div className="flex-1 px-2 mx-2 text-2xl tracking-widest font-semibold montserrat-alternates">Daily To-Do</div>
                    </Link>

                    <div className="flex-none lg:hidden">

                        <label className="swap swap-rotate px-2">

                            {/* <!-- this hidden checkbox controls the state --> */}
                            <input type="checkbox" /*data-toggle-theme="wireframe,black"*/ onClick={() => setDark(!dark)} />

                            {/* <!-- sun icon --> */}
                            <svg className="swap-on fill-current w-[23px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* <!-- moon icon --> */}
                            <svg className="swap-off fill-current w-[23px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                        <label htmlFor="my-drawer-3" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-6 montserrat-alternates font-semibold tracking-wide">

                            {/* <!-- Navbar menu content here --> */}
                            <label className="swap swap-rotate">

                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" onClick={() => setDark(!dark)} />

                                {/* <!-- sun icon --> */}
                                <svg className="swap-on fill-current w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* <!-- moon icon --> */}
                                <svg className="swap-off fill-current w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>

                            {!user ?
                                <Link to='/signin' className='type-1 menu-selection'>Sign In</Link>
                                :
                                <>
                                    <Link to='/' className=''>Calender</Link>

                                    <Link to='/to-do' className=''>To-Do</Link>

                                    <Link to='/completed-tasks' className=''>Completed Tasks</Link>

                                    <button onClick={handleSignOut} className=''>Sign Out</button>
                                </>
                            }

                        </ul>
                    </div>
                </div>

                {/* <!-- Page content here --> */}
                <div className=''>
                    {children}
                </div>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>


                <ul className="menu p-4 mt-16 overflow-y-auto w-60 bg-black bg-opacity-90 text-white montserrat-alternates font-semibold tracking-wide">

                    {/* <!-- Sidebar content here --> */}
                    {!user ?
                                <Link to='/signin' className='flex justify-center'>Sign In</Link>
                                :
                                <>
                                    <Link to='/' className='flex justify-center'>Calender</Link>

                                    <Link to='/to-do' className='flex justify-center'>To-Do</Link>

                                    <Link to='/completed-tasks' className='flex justify-center'>Completed Tasks</Link>

                                    <button onClick={handleSignOut} className='flex justify-center'>Sign Out</button>
                                </>
                            }

                </ul>


            </div>
            
        </div>
    );
};

export default Navbar;