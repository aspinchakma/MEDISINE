import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../utilities/hooks/useAuth/useAuth';
import './SignIn.css';

const SignIn = () => {
    const { signInWithGoogle, signInWithGithub, error, getUserEmail, getUserPassword, handleLogin, forgetPassword, setUser, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || './home';

    const handleLogInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user)
                history.push(redirect_url)

            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    const handleLogInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                setUser(user)
                history.push(redirect_url)
            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const signInMethods = e => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                history.push(redirect_url)
            }).catch(error => {
                const errorMessage = error.message;
                const notFound = errorMessage.slice(22, 36);
                const wrongPassword = errorMessage.slice(22, 36);
                const invalid = errorMessage.slice(22, 35);
                if (notFound === "user-not-found") {
                    return setError("User not found")
                }
                if (invalid === "invalid-email") {
                    return setError("Write valid email address")
                }
                if (wrongPassword === "wrong-password") {
                    return setError('Wrong password')
                }
                console.log(wrongPassword)
            })

    }
    return (
        <div className="container mt-5 pb-5">
            <h3 className="text-center common-header-form">SIGN IN</h3>
            <div className="row mt-4">
                <div className="col-lg-4 col-1">

                </div>
                <div className="col-lg-4 col-10">
                    <form className="common-form">
                        <input onBlur={getUserEmail} className="mb-3" type="email" required placeholder="Email" />
                        <input onBlur={getUserPassword} className="mb-1" type="password" placeholder="Password" required />
                        <p className="error-password-Message mb-1">{error}</p>
                        <button onClick={signInMethods} type="submit" className="mb-4">Sign In</button>
                        <div className="sign-in-mini-container">
                            <Link to="/signUp" className="have-account"><p >New user?</p></Link>
                            <p onClick={forgetPassword} className="have-account">Forgotten password</p>
                        </div>
                    </form>
                    <p className="or">OR</p>
                    <div className="sign-in-mini-container-methods">
                        <img onClick={handleLogInWithGoogle} className="ms-3 common-img" src="https://img.icons8.com/fluency/50/000000/google-logo.png" alt="" />
                        <img onClick={handleLogInWithGithub} className="ms-3 common-img" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="" />
                    </div>
                </div>

                <div className="col-lg-4 col-1">

                </div>
            </div>
        </div>
    );
};

export default SignIn;