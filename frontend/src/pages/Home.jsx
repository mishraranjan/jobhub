import React from 'react';
import Navbar from '../components/shared/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx';
import CategoryCarousel from '../components/CategoryCarousel.jsx';
import LatestJobs from '../components/LatestJobs.jsx';
import Footer from '../components/shared/Footer.jsx';
import UseGetAllJobs from '@/hooks/useGetAllJobs.jsx';

const Home = () => {
    UseGetAllJobs()
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CategoryCarousel />
            <LatestJobs />
            <Footer/>
        </div>
    );
}

export default Home;
