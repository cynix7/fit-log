'use client';
import React, { ReactNode, useState,createContext} from 'react';

export const WorkoutContext= createContext({});

const WorkoutProvider = ({children}:{children:ReactNode}) => {
    const[plan,setPlan]=useState([]);
    const[saved,setSaved]=useState([]);
    const [sortBy, setSortBy] = useState('Duration');
    const [tab, setTab] = useState("myPlan");
    const sharedData={
        plan,setPlan,saved,setSaved,tab,setTab,sortBy,setSortBy
    }
    return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
};

export default WorkoutProvider;