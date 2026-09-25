'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';

const Tab = () => {
    const{tab,setTab}=useContext(WorkoutContext);
    return (
        <div>
            <div className='flex gap-4'>
                <button
                    onClick={() => setTab('myPlan')}
                    className={tab === 'myPlan' ? 'bg-[#1F242D]' : ''}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setTab('saved')}
                    className={tab === 'saved' ? 'bg-[#1F242D]' : ''}
                >
                    Saved
                </button>
            </div>
        </div>
    );
};

export default Tab;