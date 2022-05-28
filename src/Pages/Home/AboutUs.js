import React from 'react';
import about from '../../images/about/about.jpg'

const AboutUs = () => {
    return (
        <div class="hero min-h-screen bg-base-200 px-5">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={about} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">About us</h1>
                    <p class="py-6">
                        We supplied our product in all over the world. Our company is situtated in dhakam, bangladesh.Different kinds of tools we provided for our company.
                    </p>
                    <button class="btn btn-success btn-sm">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;