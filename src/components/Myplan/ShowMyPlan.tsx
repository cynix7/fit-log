'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import PlanCard from './PlanCard';
import { LibraryType } from '@/Type/LibraryType';
import Link from 'next/link';
import SavedCard from './SavedCard';

const ShowMyPlan = () => {

    const { plan, saved,sortBy,tab } = useContext(WorkoutContext);

     const sortWorkouts=(workouts:LibraryType[])=>{
        const sortedWorkouts=[...workouts];
        if(sortBy==='Duration'){
            sortedWorkouts.sort((a:LibraryType,b:LibraryType)=>b.duration-a.duration);
        }
        else if(sortBy==="Calories"){
            sortedWorkouts.sort((a:LibraryType,b:LibraryType)=>b.caloriesBurned-a.caloriesBurned);
        }
        else if(sortBy==='Rating'){
            sortedWorkouts.sort((a:LibraryType,b:LibraryType)=>b.rating-a.rating);
        }
        return sortedWorkouts;
    };
    const sortPlan=sortWorkouts(plan);
    const sortSaved=sortWorkouts(saved);

    return (
        <div>
            {
                tab === 'myPlan' ? (plan.length === 0 ? <div className='text-center bg-[#000000] border border-dashed border-[#232732] rounded-xl py-12 mt-4'>
                    <h2 className='font-bold'>NOTHING HERE YET</h2>
                    <p className='text-[#A1A1AA] text-xs'>Browse the library and add a lift to get today moving.</p>
                    <Link href='/'><button className='my-4'><h2 className='bg-[#C2F800] cursor-pointer text-black text-center text-xs font-bold uppercase p-2.5 border-0 rounded-2xl'>Go to workouts</h2></button></Link>
                </div>
                    : <div>{
                        sortPlan.map((library:LibraryType)=>(
                            <PlanCard key={library.id} library={library}></PlanCard>
                        ))
                        }</div>)
                     : tab === 'saved' && ((saved.length === 0 ? <div className='text-center bg-[#000000] border border-dashed border-[#232732] rounded-xl py-12 mt-4'>
                        <h2 className='font-bold'>NOTHING HERE YET</h2>
                        <p className='text-[#A1A1AA] text-xs'>Browse the library and add a lift to get today moving.</p>
                        <Link href='/'><button className='my-4'><h2 className='bg-[#C2F800] cursor-pointer text-black text-center text-xs font-bold uppercase p-2.5 border-0 rounded-2xl'>Go to workouts</h2></button></Link>
                    </div>
                        : <div>{
                        sortSaved.map((library:LibraryType)=>(
                            <SavedCard key={library.id} library={library}></SavedCard>
                        ))
                        }</div>))
            }
        </div>
    );
};

export default ShowMyPlan;