import React from 'react';
import { Badge } from './ui/badge';

const LatestJobCards = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 mt-5">
            <div>
                <h1 className='font-medium text-lg'>Company Name </h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1  className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, laborum exercitationem. Qui, nesciunt.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-500 font-bold rounded-full px-2 py-1'} variant='ghost'>12 Position</Badge>
                <Badge className={'text-emerald-400 font-bold rounded-full px-2 py-1'} variant='ghost'>12 Position</Badge>
                <Badge className={'text-purple-500 font-bold rounded-full px-2 py-1'} variant='ghost'>12 Position</Badge>
            </div>
        </div>
    );
}

export default LatestJobCards;
