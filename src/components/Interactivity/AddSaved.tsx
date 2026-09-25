'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryType } from '@/Type/LibraryType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { VscSave } from "react-icons/vsc";

const AddSaved = ({library}:{library:LibraryType}) => {
    const{saved,setSaved}=useContext(WorkoutContext);

    const handleSaveBtn=()=>{
    setSaved([...saved,library]);
    toast.success(`${library.name} saved successfully`)
    }
    return (
        <div>
            <button onClick={()=>handleSaveBtn()} className='flex items-center gap-1.5 border border-[#374151] rounded-lg p-2.5 text-xs font-semibold'> <VscSave />Save for later</button>
        </div>
    );
};

export default AddSaved;