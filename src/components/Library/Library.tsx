import React from 'react';
import LibraryCard from './LibraryCard';
import { LibraryType } from '@/Type/LibraryType';

const getLibrary= async()=>{
    const res=await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}

const Library = async() => {
   const libraryData= await getLibrary();
    return (
        <div id='Library' className='container mx-auto'>
            <h2 className='text-2xl font-bold'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF] text-xs mb-4'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
            libraryData.map((library:LibraryType)=>(
                <LibraryCard key={library.id} library={library}></LibraryCard>
            ))
         }
            </div>
        </div>
    );
};

export default Library;