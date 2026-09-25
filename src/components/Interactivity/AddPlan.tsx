'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryType } from '@/Type/LibraryType';
import React, { useContext } from 'react';
import { RiFileAddLine } from "react-icons/ri";
import { toast } from 'react-toastify';

const AddPlan = ({library}:{library:LibraryType}) => {
    const{plan,setPlan}=useContext(WorkoutContext);

    const handlePlanBtn=()=>{
    setPlan([...plan,library]);
    toast.success(`${library.name} added successfully`)
    }
    return (
        <div>
            <button onClick={()=>handlePlanBtn()} className='flex items-center gap-1.5 border border-[#374151] rounded-lg p-2.5 text-xs font-semibold'><RiFileAddLine />Add to today's plan</button>
        </div>
    );
};

export default AddPlan;