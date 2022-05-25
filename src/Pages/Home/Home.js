import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Banner from './Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;