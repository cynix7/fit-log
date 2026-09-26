import React from 'react';
import bannerimg from '../../public/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center bg-[#15171D] container mx-auto my-8 px-8'>
            <div className='text-center sm:text-start'>
                <h2 className='text-[#C2F800] text-xs'>WORKOUT LIBRARY</h2>
                <h2 className='text-4xl font-bold my-4'>TRAIN WITH INTENT. LOG <br />EVERY SET.</h2>
                <p className='text-[#9CA3AF] mb-4 text-xs'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                <a href="#Library"><button className='bg-[#C2F800] text-black border-0 rounded-sm text-xs font-semibold cursor-pointer p-2'>BROWSE WORKOUT</button></a>
            </div>
            <div className='ml-16 my-6'>
                <Image src={bannerimg} alt='banner'></Image>
            </div>
        </div>
    );
};

export default Banner;