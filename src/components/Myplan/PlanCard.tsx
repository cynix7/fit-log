import { LibraryType } from '@/Type/LibraryType';
import Image from 'next/image';
import React from 'react';
import { RiTimer2Line } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from 'next/link';
import Remove from './Remove';
import MarkAsDone from './MarkAsDone';


const PlanCard = ({ library }: { library: LibraryType }) => {
    return (
        <div className='flex justify-between bg-[#13161D] my-4'>
            <div className='flex'>
                <Image src={library.image} alt='' width={50} height={50}></Image>
                <div>
                    <h2 className='font-bold mx-2 mt-2'>{library.name}</h2>
                    <p className='text-[#9CA3AF] text-xs mx-2'>{library.equipment}</p>
                    <div className='flex gap-2 text-[#9CA3AF] text-xs m-2'>
                        <h2 className='flex items-center gap-1'><RiTimer2Line />{library.duration}</h2>
                        <h2 className='flex items-center gap-1'><FaFire />{library.caloriesBurned}</h2>
                        <h2 className='flex items-center gap-1'><FaRegStar />{library.rating}</h2>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 items-center mr-4'>
                <Link href={`/${library.id}`}><button className='border border-[#374151] rounded-lg cursor-pointer my-auto p-2.5 text-xs font-semibold'>View Details</button></Link>
                <MarkAsDone></MarkAsDone>
                <Remove library={library}></Remove>
            </div>
        </div>
    );
};

export default PlanCard;