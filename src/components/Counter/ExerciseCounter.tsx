'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
 

const ExerciseCounter = () => {
    const{plan,saved,tab}=useContext(WorkoutContext);
    const total=tab==="myPlan" ?plan.length:saved.length
    
    return (
        <div>
            {tab==='myPlan'?(<p className='text-4xl font-bold'>{total}</p>):<p className='text-4xl font-bold'>{total}</p>}
        </div>
    );
};

export default ExerciseCounter;