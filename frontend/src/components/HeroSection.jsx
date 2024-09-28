import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse')
    }
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='px-4 py-2 rounded-full mx-auto bg-gray-100 font-medium text-blue-500'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search,Apply & <br /> Get Your <span className='text-emerald-400'>Dream Job</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta id, unde quisquam quis voluptates.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type='text'
                        placeholder='Find your dream job'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button className='rounded-r-full bg-emerald-300 text-black hover:bg-emerald-500 hover:text-white' onClick={searchJobHandler}><Search className='h-5 w-5' /></Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
