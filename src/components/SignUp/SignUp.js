import { sendEmailVerification, updateProfile } from '@firebase/auth';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../utilities/hooks/useAuth/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { getUserConfirmPassword, getUserName, getUserEmail, getUserPassword, passwordError, error, handleSignUp, setError, auth, userName, setUserName, setUserEmail, setUserConfirmPassword, setUserPassword } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || './home';


    const handleSignUpWithEmailAndPassword = (e) => {
        e.preventDefault();


        handleSignUp()
            .then(result => {


                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {

                }).catch(error => {

                })
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        history.push(redirect_url)
                        setUserName('');
                        setUserEmail('');
                        setUserPassword('')
                        setError('');
                        setUserConfirmPassword('')
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                const exist = errorMessage.slice(24, 42);
                const invalid = errorMessage.slice(22, 35);

                if (exist === 'ail-already-in-use') {
                    return setError("Email already in use")
                }
                if (invalid === "invalid-email") {
                    return setError('Please write valid email')
                }
            })

    }
    return (
        <div className="container mt-5 pb-5">
            <h3 className="text-center common-header-form">CREATE NEW ACCOUNT</h3>
            <div className="row mt-4">
                <div className="col-lg-4 col-1">

                </div>
                <div className="col-lg-4 col-10">
                    <form className="common-form">
                        <input onBlur={getUserName} className="mb-3" type="text" placeholder="Full Name" name="" id="" required />
                        <input onBlur={getUserEmail} className="mb-3" type="email" required placeholder="Email" />
                        <input onChange={getUserPassword} className="mb-0" type="password" placeholder="Password" required />
                        <p className="error-password-Message mb-1">{passwordError}</p>
                        <input onBlur={getUserConfirmPassword} className="mb-0" type="password" placeholder="Confirm Password" required />
                        <p className="error-password-Message mb-1">{error}</p>
                        <button onClick={handleSignUpWithEmailAndPassword} type="submit" className="mb-4">SIGN UP</button>
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