import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const daysAgo = (date) => {
    const today = new Date();
    const postedDate = new Date(date);
    const differenceInTime = today - postedDate; // Difference in milliseconds
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert milliseconds to days
    return differenceInDays;
};

const Job = ({ job }) => {
    const navigate = useNavigate();
    const daysSincePosted = daysAgo(job?.createdAt);

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>
                    {daysSincePosted} day{daysSincePosted !== 1 ? 's' : ''} ago
                </p>
                <Button variant='outline' className='rounded-full ' size='icon'><Bookmark /></Button>
            </div>
            <div className="flex items-center gap-2 my-2">
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://img.freepik.com/premium-vector/minimalist-logo-design-any-corporate-brand-business-company_1253202-77511.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-500 font-bold rounded-full px-2 py-1'} variant='ghost'>{job?.position} Position</Badge>
                <Badge className={'text-emerald-400 font-bold rounded-full px-2 py-1'} variant='ghost'>{job?.jobType}</Badge>
                <Badge className={'text-purple-500 font-bold rounded-full px-2 py-1'} variant='ghost'>{job?.salary} LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant='outline' onClick={() => navigate(`/description/${job?._id}`)}>Details</Button>
                <Button className='bg-blue-300 text-black hover:bg-blue-500 hover:text-white'>Save for Later</Button>
            </div>
        </div>
    );
}

export default Job;
