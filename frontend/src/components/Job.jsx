import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {
    const navigate = useNavigate();
    const jobId = 'hdkahsdkadkasdsaldhlidh';
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago </p>
                <Button variant='outline' className='rounded-full ' size='icon'><Bookmark /></Button>
            </div>
            <div className="flex items-center gap-2 my-2">
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://img.freepik.com/premium-vector/minimalist-logo-design-any-corporate-brand-business-company_1253202-77511.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minus pariatur! Vero, tempore? Expedita odit, ullam placeat voluptates tenetur labore id animi consequatur ducimus maxime. Aspernatur magnam omnis cupiditate atque.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-500 font-bold rounded-full px-2 py-1'} variant='ghost'>12 Position</Badge>
                <Badge className={'text-emerald-400 font-bold rounded-full px-2 py-1'} variant='ghost'>Part Time</Badge>
                <Badge className={'text-purple-500 font-bold rounded-full px-2 py-1'} variant='ghost'>24 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant= 'outline' onClick={()=>navigate(`description/${jobId}`)}>Details</Button>
                <Button className='bg-blue-300 text-black  hover:bg-blue-500 hover:text-white '>Save for Later</Button>
            </div>
        </div>
    );
}

export default Job;
