import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="container main-banner-container">
                <div>
                    <h3 className="banner-details">Protect Yourself</h3>
                    <h1 className="main-header">Covid-19 Prevention Product Combo</h1>
                    <p className="banner-details">Get the best Grade A safety mask for you & your loved ones protection.</p>
                    <Link to="details/7"><button className="banner-buy-button">Starts from $0.99</button></Link>

                </div>
                <div>
                    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/banner/item-6.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;