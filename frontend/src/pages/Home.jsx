import React from 'react';
import Navbar from '../components/shared/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx';
import CategoryCarousel from '../components/CategoryCarousel.jsx';
import LatestJobs from '../components/LatestJobs.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
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
