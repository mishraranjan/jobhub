import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

// Function to calculate days since the job was posted
const daysAgo = (date) => {
    const today = new Date();
    const postedDate = new Date(date);
    const differenceInTime = today - postedDate; // Difference in milliseconds
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert milliseconds to days

    if (differenceInDays < 1) {
        return "Today";
    }

    return `${differenceInDays} day${differenceInDays !== 1 ? 's' : ''} ago`; // Returns formatted string for days
};

const Job = ({ job }) => {
    const navigate = useNavigate();
    const postedTime = daysAgo(job?.createdAt);

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>
                    {postedTime} {/* Shows either "Today" or "X days ago" */}
                </p>
                <Button variant='outline' className='rounded-full ' size='icon'><Bookmark /></Button>
            </div>
            <div className="flex items-center gap-4 my-4">
                {/* Styled logo button with circular background */}
                <div className='relative w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                    <Avatar className='w-full h-full rounded-full overflow-hidden'>
                        <AvatarImage
                            src={job?.company?.logo || 'https://via.placeholder.com/150'} // Fallback in case no logo is provided
                            alt={job?.company?.name}
                            className="object-cover" // Ensure the logo covers the area without distortion
                        />
                    </Avatar>
                </div>
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
};

export default Job;
