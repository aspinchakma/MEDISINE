import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-4 py-4 footer-container">
            <div className="row text-center container mx-auto">
                <div className="col-lg-3 col-12">
                    <img src="https://i.ibb.co/25Z49VP/Logo13.png" alt="" />
                </div>
                <div className="col-lg-2">
                    <h4>PRODUCTS</h4>
                    <p>Price Drop</p>
                    <p>New Products</p>
                    <p>Best Sales</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-lg-3">
                    <h4>OUR COMPANY</h4>
                    <p>Delivery</p>
                    <p>Legal Notice</p>
                    <p>Terms And Conditions</p>
                    <p>About Us</p>
                </div>

                <div className="col-lg-4">
                    <h4>CONTACT INFO</h4>
                    <p>Address: Suvalong, Barkal, Rangamati, Chittagong.</p>
                    <p>Phone:01571218443</p>
                    <p>E-mail:aspinchakma19@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;