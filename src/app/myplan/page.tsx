import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const page = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-bold mt-8'>MY PLAN</h2>
            <p className='text-[#A1A1AA] text-xs mb-4'>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='grid grid-cols-3 bg-[#13161D] border border-[#232732] rounded-xl p-6'>
                <div>
                    <h2 className='text-[#A1A1AA] text-xs'>Exercises</h2>
                    <p className='text-4xl font-bold'>2</p>
                </div>
                <div className='px-8 border-2 border-x-[#232732] border-y-[#13161D]'>
                    <h2 className='text-[#A1A1AA] text-xs'>Minutes</h2>
                    <p className='text-4xl font-bold'>23</p>
                </div>
                <div className='px-8'>
                    <h2 className='text-[#A1A1AA] text-xs'>Calories</h2>
                    <p className='text-4xl font-bold'>190</p>
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex items-center gap-4 bg-[#13161D]'>
                    <h2>Today's Plan</h2>
                    <h2>Saved</h2>
                </div>
                <div className='flex items-center gap-4'>
                    <h2>Sort By</h2>
                    <button className='flex items-center gap-2.5 p-1.5 bg-[#13161D] border border-[#232732] rounded-lg'>Duration <span><RiArrowDropDownLine /></span></button>
                </div>
            </div>
            <div className='text-center bg-[#000000] border border-dashed border-[#232732] rounded-xl py-12 mt-4'>
                <h2 className='font-bold'>NOTHING HERE YET</h2>
                <p className='text-[#A1A1AA] text-xs'>Browse the library and add a lift to get today moving.</p>
                <button className='my-4'><h2 className='bg-[#C2F800] text-black text-center text-xs font-bold uppercase p-2.5 border-0 rounded-2xl'>Go to workouts</h2></button>
            </div>
        </div>
    );
};

export default page;