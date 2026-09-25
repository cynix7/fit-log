'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';

const Saved = () => {
    const{saved}=useContext(WorkoutContext);
            const total=saved.length;
    return (
        <div>
            <span className='inline-flex w-6 h-6 border border-[#9CA3AF] rounded-full justify-center items-center font-bold text-[#9CA3AF]'>{total}</span>
        </div>
    );
};

export default Saved;