import React, { useEffect } from 'react';
import Navbar from '../components/shared/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx';
import CategoryCarousel from '../components/CategoryCarousel.jsx';
import LatestJobs from '../components/LatestJobs.jsx';
import Footer from '../components/shared/Footer.jsx';
import UseGetAllJobs from '@/hooks/useGetAllJobs.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    UseGetAllJobs()
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.role === 'recruiter') {
            navigate('/admin/companies');
        }
    })
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CategoryCarousel />
            <LatestJobs />
            <Footer />
        </div>
    );
}

export default Home;
