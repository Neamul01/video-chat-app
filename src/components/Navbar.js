import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' bg-[#606060] flex justify-center'>
            <div className="navbar container  text-white">
                <div className="w-1/6 navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={'/'} as='li'>Home</Link>
                            <Link to={'/'} as='li'>Calls</Link>
                            <Link to={'/'} as='li'>Deals</Link>
                            <Link to={'/'} as='li'>Team</Link>
                            <Link to={'/'} as='li'>Activity</Link>
                            <Link to={'/'} as='li'>Library</Link>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">BsHappy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-6">
                        <Link to={'/'} as='li'>Home</Link>
                        <Link to={'/calls'} as='li'>Calls</Link>
                        <Link to={'/'} as='li'>Deals</Link>
                        <Link to={'/'} as='li'>Team</Link>
                        <Link to={'/'} as='li'>Activity</Link>
                        <Link to={'/'} as='li'>Library</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <div className="input-group relative  justify-center items-center">
                            <input type="text" placeholder="Search…" className="input input-bordered h-10 flex bg-[#606060] border-white border-4 placeholder-white" style={{ borderRadius: '2rem' }} />
                            <button className="btn btn-square btn-ghost absolute right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <Link to={'/myAccount'} className="btn btn-ghost">My Account</Link>
                    <div className="avatar">
                        <div className="w-8 rounded-full bg-white text-black justify-center items-center" style={{ display: 'flex' }}>
                            <span className="font-bold w-full">?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;