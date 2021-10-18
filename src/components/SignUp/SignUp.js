import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="container mt-5 pb-5">
            <h3 className="text-center common-header-form">CREATE NEW ACCOUNT</h3>
            <div className="row mt-4">
                <div className="col-lg-4 col-1">

                </div>
                <div className="col-lg-4 col-10">
                    <form className="common-form">
                        <input className="mb-3" type="text" placeholder="Full Name" name="" id="" required />
                        <input className="mb-3" type="email" required placeholder="Email" />
                        <input className="mb-3" type="password" placeholder="Password" required />
                        <input className="mb-3" type="password" placeholder="Confirm Password" required />
                        <button type="submit" className="mb-4">SIGN UP</button>
                        <Link to="/signIn" className="have-account"><p >You have an account?</p></Link>
                    </form>
                </div>
                <div className="col-lg-4 col-1">

                </div>
            </div>
        </div>
    );
};

export default SignUp;