import AddPlan from '@/components/Interactivity/AddPlan';
import AddSaved from '@/components/Interactivity/AddSaved';
import { LibraryType } from '@/Type/LibraryType';
import Image from 'next/image';
import React from 'react';



interface paramsType {
    params: {
        LibraryId: string
    }
}

const DetailspPage = async ({ params }: paramsType) => {
    const { LibraryId } = await params;
    const library: LibraryType = await (await fetch(`https://api.abcz.workers.dev/api/fitlog/${LibraryId}`)).json()
    return (
        <div className='grid grid-cols-2 gap-8 container mx-auto mt-8'>
            <div className='rounded-3xl overflow-hidden'>
                <Image src={library.image} alt='' width={400} height={200} className='w-full'></Image>
            </div>
            <div>
                
                    <h2 className='uppercase text-2xl font-bold mt-2'>{library.name}</h2>
                
                <p className='text-xs text-[#9CA3AF]'>{library.description}</p>
                <div className='flex gap-2 my-3.5'>
                    {
                        library.muscleGroups.map((element, index) => (
                            <h2 key={index} className='bg-[#C2F800] text-black text-center text-xs font-semibold uppercase px-1.5 border-0 rounded-2xl'>{element}</h2>
                        ))
                    }
                </div>
                <ul className='bg-[#151922] border border-[#232834] rounded-2xl text-xs text-[#9CA3AF] font-semibold'>
                    <li className='flex justify-between border-b border-[#232834] p-2 px-4'><h2>EQUIPMENT</h2> <h2 className='text-[#E5E7EB]'>{library.equipment}</h2></li>
                    <li className='flex justify-between border-b border-[#232834] p-2 px-4'><h2>DIFFICULTY</h2> <h2 className='text-[#E5E7EB]'>{library.difficulty}</h2></li>
                    <li className='flex justify-between border-b border-[#232834] p-2 px-4'><h2>SETS</h2> <h2 className='text-[#E5E7EB]'>{library.sets}</h2></li>
                    <li className='flex justify-between border-b border-[#232834] p-2 px-4'><h2>REPS</h2> <h2 className='text-[#E5E7EB]'>{library.reps}</h2></li>
                    <li className='flex justify-between border-b border-[#232834] p-2 px-4'><h2>DURATION</h2 > <h2 className='text-[#E5E7EB]'>{library.duration}</h2></li>
                    <li className='flex justify-between border-b border-[#232834] p-2 px-4'><h2>CALORIES</h2> <h2 className='text-[#E5E7EB]'>{library.caloriesBurned}</h2></li>
                    <li className='flex justify-between p-2 px-4'><h2>RATING</h2> <h2 className='text-[#E5E7EB]'>{library.rating}</h2></li>

                </ul>
                <h2 className='text-sm font-bold mt-4 mb-1.5'>INSTRUCTIONS</h2>
                <ol className='text-xs text-[#D1D5DB]'>
                    <li>1. Lie on the bench with eyes under the bar and feet planted.</li>
                    <li>2. Unrack with locked elbows and lower the bar to mid-chest.</li>
                    <li>3. Press up in a slight arc until elbows lock without bouncing.</li>
                    <li>4. Keep shoulder blades pinched and a natural arch in the back.</li>
                </ol>
                <div className='flex gap-2 mt-8'>
                    <AddPlan library={library}></AddPlan>
                    <AddSaved library={library}></AddSaved>
                </div>
            </div>
        </div>
    );
};

export default DetailspPage;