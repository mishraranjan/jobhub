import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';
import axios from 'axios';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        if (!companyName.trim()) {
            toast.error("Company name is required");
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (res?.data?.success) {
                const company = res?.data?.company;

                dispatch(setSingleCompany(company));

                toast.success(res.data.message);

                const companyId = company?._id;
                navigate(`/admin/companies/${companyId}`);
            } else {
                toast.error(res?.data?.message || "Failed to register company");
            }
        } catch (error) {
            console.error('API Error:', error);
            toast.error(error?.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <div className="my-10">
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to name your company? You can change it later.</p>
                </div>
                <Label>Company Name</Label>
                <Input
                    type='text'
                    className='my-2'
                    placeholder='Enter your company name'
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className="flex items-center gap-2 my-2">
                    <Button variant='outline' onClick={() => navigate('/admin/companies')}>
                        Cancel
                    </Button>
                    <Button
                        className='bg-blue-400 hover:bg-blue-500 hover:text-white text-black'
                        onClick={registerNewCompany}
                        disabled={loading || !companyName.trim()}
                    >
                        {loading ? 'Registering...' : 'Continue'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CompanyCreate;
