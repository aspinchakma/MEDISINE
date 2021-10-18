import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="my-4 subscribe-container text-center py-5">
            <h4 className="pt-3">Subscribe To Our Newsletter</h4>
            <p>Get e-mail updates about our latest shop and special offers.</p>
            <div className="email-container pb-3">
                <input type="email" placeholder="Your Email Address" />
                <button>SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;