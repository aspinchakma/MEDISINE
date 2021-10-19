import React from 'react';
import CompanyLogo from '../Home/CompanyLogo/CompanyLogo';
import OurTeam from '../Home/OurTeam/OurTeam';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="img-container">
                <h2>About Us</h2>
                <img src="https://i.ibb.co/tHcsTZv/about-image.jpg" alt="" />
                <h2 className="mt-5">Welcome to Medisine</h2>
                <p className="empty"></p>
                <p className="py-4">A pharmacy (also called "drugstore" in American English or "community pharmacy" or "chemist" in Commonwealth English, or rarely, apothecary) is a retail shop which provides pharmaceutical drugs, among other products. At the pharmacy, a pharmacist oversees the fulfillment of medical prescriptions and is available to counsel patients about prescription and over-the-counter drugs or about healthcare and wellness issues. A typical pharmacy would be in the commercial area of a community. Mail-order dispensing is a recent development.</p>
                <h2 className="mt-4">Why Choose Us</h2>
                <p className="empty"></p>
                <OurTeam></OurTeam>
                <h2 className="mt-4">our company partners</h2>
                <p className="empty mb-5"></p>
                <CompanyLogo></CompanyLogo>
            </div>

        </div>
    );
};

export default About;