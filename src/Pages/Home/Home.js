import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import AboutUs from './AboutUs';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;