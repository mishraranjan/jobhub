import React, { useEffect } from 'react';
import Navbar from '../components/shared/Navbar.jsx'
import Job from '@/components/Job.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice.js';
import UseGetAllJobs from '@/hooks/useGetAllJobs.jsx';

const Browse = () => {
    UseGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSearchedQuery(''));
    }, [])
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results({allJobs.length})</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        allJobs.length === 0 ? <div className='text-center w-6xl'>
                            <h1 className='text-xl text-red-600 font-bold'>No Jobs Found</h1>
                        </div> :
                            allJobs.map((job) => {
                                return (
                                    <Job key={job._id} job={job} />
                                )
                            })
                    }
                </div>

            </div>
        </div>
    );
}

export default Browse;
