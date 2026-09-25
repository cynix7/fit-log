'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryType } from '@/Type/LibraryType';
import React, { useContext } from 'react';

const Calories = () => {
    const{plan,saved,tab}=useContext(WorkoutContext);
        const planTotal=plan.reduce((sum:number,number:LibraryType)=>sum+number.caloriesBurned,0);
        const savedTotal=saved.reduce((sum:number,number:LibraryType)=>sum+number.caloriesBurned,0);
    return (
        <div>
            {tab==='myPlan'?(<p className='text-4xl font-bold'>{planTotal}</p>):<p className='text-4xl font-bold'>{savedTotal}</p>}
        </div>
    );
};

export default Calories;