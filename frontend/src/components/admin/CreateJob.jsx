import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button'; // For better button styling
import { Loader2 } from 'lucide-react'; // Loading spinner for better UX
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const CreateJob = () => {
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company); // Fetching companies from redux store

    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: "" // To store selected company ID
    });

    const [loading, setLoading] = useState(false); // State for loading spinner

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleCompanySelect = (companyId) => {
        setInput({ ...input, companyId });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        if (!input.companyId) {
            toast.error("Please select a company.");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/jobs');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-xl mx-auto p-6 my-10 bg-white shadow-md rounded-lg">
                <form onSubmit={submitHandler} className="space-y-8">
                    {/* Form Fields */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label>Job Title</Label>
                                <Input
                                    type='text'
                                    name='title'
                                    value={input.title}
                                    onChange={changeEventHandler}
                                    placeholder="e.g. Software Engineer"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input
                                    type='text'
                                    name='description'
                                    value={input.description}
                                    onChange={changeEventHandler}
                                    placeholder="Brief job description"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                        </div>
                    </div>

                    {/* More Fields */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label>Requirements</Label>
                                <Input
                                    type='text'
                                    name='requirements'
                                    value={input.requirements}
                                    onChange={changeEventHandler}
                                    placeholder="e.g. Skills, qualifications"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                            <div>
                                <Label>Salary</Label>
                                <Input
                                    type='text'
                                    name='salary'
                                    value={input.salary}
                                    onChange={changeEventHandler}
                                    placeholder="e.g. 10LPA"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label>Location</Label>
                                <Input
                                    type='text'
                                    name='location'
                                    value={input.location}
                                    onChange={changeEventHandler}
                                    placeholder="Job Location"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                            <div>
                                <Label>Job Type</Label>
                                <Input
                                    type='text'
                                    name='jobType'
                                    value={input.jobType}
                                    onChange={changeEventHandler}
                                    placeholder="e.g. Full-Time, Part-Time"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Label>Experience Level</Label>
                                <Input
                                    type='text'
                                    name='experience'
                                    value={input.experience}
                                    onChange={changeEventHandler}
                                    placeholder="e.g.1,2"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                />
                            </div>
                            <div>
                                <Label>Number of Positions</Label>
                                <Input
                                    type='number'
                                    name='position'
                                    value={input.position}
                                    onChange={changeEventHandler}
                                    placeholder="Enter number of open positions"
                                    className='focus:ring-2 focus:ring-indigo-500 w-full my-1'
                                    min={1} // Ensures only positive values
                                />
                            </div>
                        </div>
                    </div>

                    {/* Company Selector */}
                    {companies.length > 0 ? (
                        <Select onValueChange={handleCompanySelect}>
                            <SelectTrigger>
                                <SelectValue placeholder={'Select a Company'} />
                            </SelectTrigger>
                            <SelectContent>
                                {companies.map((company) => (
                                    <SelectItem key={company._id} value={company._id}>
                                        {company.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    ) : (
                        <p className="text-red-600 font-bold text-xs text-center my-3">
                            Please register a company first, before posting a job
                        </p>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="px-6 py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 hover:text-white focus:ring-2 focus:ring-indigo-500 w-full flex justify-center items-center"
                            disabled={loading}
                        >
                            {loading && <Loader2 className="animate-spin mr-2" />}
                            {loading ? "Creating Job..." : "Create Job"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJob;
