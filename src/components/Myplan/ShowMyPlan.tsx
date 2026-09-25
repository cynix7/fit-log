'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { DiVim } from 'react-icons/di';
import Library from '../Library/Library';
import PlanCard from './PlanCard';
import { LibraryType } from '@/Type/LibraryType';

const ShowMyPlan = () => {

    const { plan, saved, tab } = useContext(WorkoutContext);

    return (
        <div>
            {
                tab === 'myPlan' ? (plan.length === 0 ? <div className='text-center bg-[#000000] border border-dashed border-[#232732] rounded-xl py-12 mt-4'>
                    <h2 className='font-bold'>NOTHING HERE YET</h2>
                    <p className='text-[#A1A1AA] text-xs'>Browse the library and add a lift to get today moving.</p>
                    <button className='my-4'><h2 className='bg-[#C2F800] text-black text-center text-xs font-bold uppercase p-2.5 border-0 rounded-2xl'>Go to workouts</h2></button>
                </div>
                    : <div>{
                        plan.map((library:LibraryType)=>(
                            <PlanCard key={library.id} library={library}></PlanCard>
                        ))
                        }</div>)
                     : tab === 'saved' && ((saved.length === 0 ? <div className='text-center bg-[#000000] border border-dashed border-[#232732] rounded-xl py-12 mt-4'>
                        <h2 className='font-bold'>NOTHING HERE YET</h2>
                        <p className='text-[#A1A1AA] text-xs'>Browse the library and add a lift to get today moving.</p>
                        <button className='my-4'><h2 className='bg-[#C2F800] text-black text-center text-xs font-bold uppercase p-2.5 border-0 rounded-2xl'>Go to workouts</h2></button>
                    </div>
                        : <div>{
                        saved.map((library:LibraryType)=>(
                            <PlanCard key={library.id} library={library}></PlanCard>
                        ))
                        }</div>))
            }
        </div>
    );
};

export default ShowMyPlan;