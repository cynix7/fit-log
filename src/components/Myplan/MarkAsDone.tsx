'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MarkAsDone = () => {

    const[isDone,setIsDone]=useState(false)
    
    const handleMark = () => {
        toast.success('Marked successfully');
        setIsDone(true);
    };
    return (
        <div>
            <button onClick={handleMark} disabled={isDone} className={`my-4 ${isDone?'bg-amber-100 cursor-not-allowed':'bg-[#C2F800] cursor-pointer'}  text-black text-center text-xs font-bold uppercase p-2.5 border-0 rounded-2xl`}>✓ Mark as Done</button>
        </div>
    );
};

export default MarkAsDone;