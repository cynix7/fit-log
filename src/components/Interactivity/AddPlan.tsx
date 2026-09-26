'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryType } from '@/Type/LibraryType';
import React, { useContext } from 'react';
import { RiFileAddLine } from "react-icons/ri";
import { toast } from 'react-toastify';

const AddPlan = ({library}:{library:LibraryType}) => {
    const{plan,setPlan}=useContext(WorkoutContext);

    const handlePlanBtn=()=>{
    if(plan.some((element:LibraryType)=>element.id===library.id)){
        toast.error('Already in your plan')
    }
        else{
            setPlan([...plan,library]);
    toast.success(`Added to totay's plan`);
        }
    
    }
    return (
        <div>
            <button onClick={()=>handlePlanBtn()} className='bg-[#C2F800] text-black flex items-center gap-1.5 border border-[#374151] cursor-pointer rounded-lg p-2.5 text-xs font-semibold'><RiFileAddLine />Add to today's plan</button>
        </div>
    );
};

export default AddPlan;