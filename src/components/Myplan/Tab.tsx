'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';

const Tab = () => {
    const{tab,setTab}=useContext(WorkoutContext);
    return (
        <div>
            <div className='flex gap-4 p-2'>
                <button
                    onClick={() => setTab('myPlan')}
                    className={tab === 'myPlan' ? 'text-xs p-1.5 px-4 rounded-lg bg-[#1F242D]' : 'text-xs p-1.5 text-[#A1A1AA]'}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setTab('saved')}
                    className={tab === 'saved' ? 'text-xs p-1.5 px-4 rounded-lg bg-[#1F242D]' : 'text-xs p-1.5 text-[#A1A1AA]'}
                >
                    Saved
                </button>
            </div>
        </div>
    );
};

export default Tab;