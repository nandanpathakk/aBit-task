import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'
import Dashboard from '../components/Dashboard'
import NewRelease from '../components/NewRelease'
import Footer from "../components/Footer"
function HomePage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Dashboard />
            <NewRelease />
            <Footer />
        </div>
    );
}

export default HomePage;
