import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found text-center row py-5 my-4">
            <div className="col-lg-3">

            </div>
            <div className="col-lg-6 my-5">
                <h1>4<span>0</span>4</h1>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/home"><button className="back-to-home mt-4">HOME</button></Link>
            </div>
            <div className="col-lg-3">

            </div>
        </div>
    );
};

export default NotFound;