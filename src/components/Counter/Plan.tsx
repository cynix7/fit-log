'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';

const Plan = () => {
    const{plan}=useContext(WorkoutContext);
        const total=plan.length;
    return (
        <div>
            <span className='inline-flex w-6 h-6 bg-[#C2F800] border-0 rounded-full justify-center items-center font-bold text-black'>{total}</span>
        </div>
    );
};

export default Plan;