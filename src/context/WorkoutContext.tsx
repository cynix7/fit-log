'use client';
import { LibraryType } from '@/Type/LibraryType';
import React, { ReactNode, useState,createContext, SetStateAction, Dispatch} from 'react';

interface WorkoutContextType {
  plan: LibraryType[];
  setPlan: Dispatch<SetStateAction<LibraryType[]>>;

  saved: LibraryType[];
  setSaved: Dispatch<SetStateAction<LibraryType[]>>;

  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;

  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

export const WorkoutContext= createContext<WorkoutContextType>({}as WorkoutContextType);

const WorkoutProvider = ({children}:{children:ReactNode}) => {
    const[plan,setPlan]=useState<LibraryType[]>([]);
    const[saved,setSaved]=useState<LibraryType[]>([]);
    const [sortBy, setSortBy] = useState('Duration');
    const [tab, setTab] = useState("myPlan");
    const sharedData={
        plan,setPlan,saved,setSaved,tab,setTab,sortBy,setSortBy
    }
    return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
};

export default WorkoutProvider;