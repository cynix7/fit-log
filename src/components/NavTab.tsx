'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavTab = () => {
    const pathName = usePathname();
    return (
        <div className='flex gap-4 items-center'>
            <Link href='/'
                className={pathName === '/' ? 'bg-[#1A2312] border-0 rounded-3xl text-[#C2F800] text-xs font-semibold px-4 py-1.5' : 'text-[#9CA3AF] text-xs font-semibold px-4'}
            >
                Workouts
            </Link>
            <Link href='/myplan'
                className={pathName === '/myplan' ? 'bg-[#1A2312] border-0 rounded-3xl text-[#C2F800] text-xs font-semibold px-4 py-1.5' : 'text-[#9CA3AF] text-xs font-semibold px-4'}
            >
                My Plan
            </Link>

        </div>
    );
};

export default NavTab;