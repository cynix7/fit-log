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
                defaultValue="Server location" className="select select-neutral"> 
                <option>Duration</option>
                <option>Calories</option>
                <option>Rating</option>
            </select>
        </div>
    );
};

export default Sort;