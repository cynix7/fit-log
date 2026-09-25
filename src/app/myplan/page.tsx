import Calories from '@/components/Counter/Calories';
import Duration from '@/components/Counter/Duration';
import ExerciseCounter from '@/components/Counter/ExerciseCounter';
import ShowMyPlan from '@/components/Myplan/ShowMyPlan';
import Tab from '@/components/Myplan/Tab';
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
                    <ExerciseCounter></ExerciseCounter>
                </div>
                <div className='px-8 border-2 border-x-[#232732] border-y-[#13161D]'>
                    <h2 className='text-[#A1A1AA] text-xs'>Minutes</h2>
                    <Duration></Duration>
                </div>
                <div className='px-8'>
                    <h2 className='text-[#A1A1AA] text-xs'>Calories</h2>
                    <Calories></Calories>
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex items-center gap-4 bg-[#13161D]'>
                    <Tab></Tab>
                </div>
                <div className='flex items-center gap-4'>
                    <h2 className='text-[#A1A1AA] text-xs'>Sort By</h2>
                    <button className='flex items-center gap-2.5 p-1.5 bg-[#13161D] border border-[#232732] rounded-lg'>Duration <span><RiArrowDropDownLine /></span></button>
                </div>
            </div>
            <div>
                <ShowMyPlan></ShowMyPlan>
            </div>
        </div>
    );
};

export default page;