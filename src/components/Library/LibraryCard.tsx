import { LibraryType } from '@/Type/LibraryType';
import Image from 'next/image';
import React from 'react';
import { RiTimer2Line } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from 'next/link';

interface LibraryProps{
    library: LibraryType
}

const LibraryCard = ({library}:LibraryProps) => {
    return (
        <Link href={`/${library.id}`}>
        <div className='bg-[#15171D] border-0 rounded-xl overflow-hidden'>
            <Image src={library.image} width={400} height={200} alt=''></Image>
           <div className='p-4'>
             <div className='flex gap-2'> 
                {
                    library.muscleGroups.map((element,index)=>(
                        <h2 key={index} className='bg-[#C2F800] text-black text-center text-xs font-semibold uppercase px-1.5 border-0 rounded-2xl'>{element}</h2>
                    ))
                }
            </div>
            <div className='uppercase font-semibold mt-2'>
                <h2>{library.name}</h2>
            </div>
            <div className='text-[#9CA3AF] text-xs mb-3'>
                <p>{library.equipment}</p>
            </div>
            <hr className='border-[#20242E]' />
            <div className='flex gap-2 text-[#9CA3AF] text-xs m-2'>
                <h2 className='flex items-center gap-1'><RiTimer2Line />{library.duration}</h2>
                <h2 className='flex items-center gap-1'><FaFire />{library.caloriesBurned}</h2>
                <h2 className='flex items-center gap-1'><FaRegStar />{library.rating}</h2>
            </div>
           </div>
            
        </div>
        </Link>
    );
};

export default LibraryCard;