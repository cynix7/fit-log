'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { LibraryType } from '@/Type/LibraryType';
import React, { useContext, useState } from 'react';

const Sort = () => {
    const {sortBy, setSortBy} = useContext(WorkoutContext);

   
    return (
        <div>
            <select
                value={sortBy}
                onChange={(e)=>setSortBy(e.target.value)}
                className="select select-neutral"> 
                <option value='Duration'>Duration</option>
                <option value='Calories'>Calories</option>
                <option value='Rating'>Rating</option>
            </select>
        </div>
    );
};

export default Sort;