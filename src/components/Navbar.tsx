import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png'
import Link from 'next/link';
import Plan from './Counter/Plan';
import Saved from './Counter/Saved';

const Navbar = () => {

    const Links = <>
        <li className='bg-[#1A2312] border-0 rounded-3xl text-[#C2F800]'><Link href='/'> Workouts</Link></li>
        <li className='text-[#9CA3AF]'><Link href='/myplan'>My Plan</Link></li>
    </>
    return (
        <nav className=' bg-black border-b border-[#1C1F26] sticky top-0 z-50'>
            <div className="navbar shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}

                        </ul>
                    </div>
                    <Image src={logo} alt='logo'></Image>
                    <h2 className='font-bold mx-2'>FITLOG</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link href='/myplan' className='text-[#9CA3AF] flex items-center gap-2.5'>Plan <Plan></Plan></Link>
                    <Link href='/myplan' className='text-[#9CA3AF] flex items-center gap-2.5'>Saved <Saved></Saved></Link>
                    
                </div>
            </div>
        </nav>

    );
};

export default Navbar;