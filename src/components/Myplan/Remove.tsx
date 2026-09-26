import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryType } from '@/Type/LibraryType';
import React, { useContext } from 'react';
import { RxCross1 } from "react-icons/rx";
import { toast } from 'react-toastify';

const Remove = ({library}:{library:LibraryType}) => {
    const {plan,saved,setPlan,setSaved,tab}=useContext(WorkoutContext);
    const handleRemove = () => {
        if (tab === 'myPlan') {
            setPlan(plan.filter((item:LibraryType)=> item.id !== library.id));
            toast.error(`Removed from today's plan`)
        } else {
            setSaved(saved.filter((item:LibraryType) => item.id !== library.id));
            toast.error(`Removed from saved list`)
        }
    };
    return (
        <div>
            <button onClick={()=>handleRemove()} className='cursor-pointer'><RxCross1 /></button>
        </div>
    );
};

export default Remove;