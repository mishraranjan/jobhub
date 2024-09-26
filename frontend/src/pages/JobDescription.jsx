import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React from 'react';

const JobDescription = () => {
    const isApply = false;

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>FrontEnd Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className='text-blue-500 font-bold rounded-full px-2 py-1' variant='ghost'>
                            12 Positions
                        </Badge>
                        <Badge className='text-emerald-400 font-bold rounded-full px-2 py-1' variant='ghost'>
                            Part Time
                        </Badge>
                        <Badge className='text-purple-500 font-bold rounded-full px-2 py-1' variant='ghost'>
                            24 LPA
                        </Badge>
                    </div>
                </div>

                <Button
                    className={`rounded-lg ${isApply
                        ? 'bg-gray-600 cursor-not-allowed text-white hover:bg-gray-700'
                        : 'bg-emerald-300 text-black hover:bg-emerald-500 hover:text-white'
                        }`}
                    disabled={isApply}
                >
                    {isApply ? (
                        <>
                            <Check className='mr-1' /> Already Applied
                        </>
                    ) : (
                        'Apply Job'
                    )}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>Fronend Developer</span></h1>
                <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>Bengaluru</span></h1>
                <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet.</span></h1>
                <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>0-2 years</span></h1>
                <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>4</span></h1>
                <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>25-09-2024</span></h1>
            </div>
        </div>
    );
};

export default JobDescription;
