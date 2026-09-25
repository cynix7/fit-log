import React from 'react';
import { IoIosFitness } from "react-icons/io";

const Footer = () => {
    return (
        <div className='mt-16'>
            <hr className='border-[#20242E]' />
            <div className='container mx-auto m-8'>
                <div className='flex justify-between items-center'>
                    <h2 className='flex items-center gap-2 text-sm font-semibold'><span className='text-[#C2F800]'><IoIosFitness /></span>FITLOG</h2>
                    <p className='text-xs text-[#9CA3AF]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;