import React from 'react';
import { Badge } from './ui/badge';

const LatestJobCards = ({ job }) => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 mt-5">
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-500 font-bold rounded-full px-2 py-1'} variant='ghost'>{job?.position} Position</Badge>
                <Badge className={'text-emerald-400 font-bold rounded-full px-2 py-1'} variant='ghost'>{job?.jobType}</Badge>
                <Badge className={'text-purple-500 font-bold rounded-full px-2 py-1'} variant='ghost'>{job?.salary} LPA </Badge>
            </div>
        </div>
    );
}

export default LatestJobCards;
