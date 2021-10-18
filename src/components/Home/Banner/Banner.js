import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="container">
                <p className="banner-details">Safety Masks</p>
                <h1 className="main-header"><span>15% Off.</span> Hurry</h1>
                <p className="banner-details">Get the best Grade A safety mask for you & your loved ones protection.</p>
                <button className="banner-buy-button">Starts from $0.99</button>
            </div>
        </div>
    );
};

export default Banner;