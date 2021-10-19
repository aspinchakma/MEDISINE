import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";


const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userEmail, setUserEmail] = useState('');



    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(result => setProducts(result))
    }, [])
    useEffect(() => {
        fetch('./blogs.json')
            .then(response => response.json())
            .then(result => setBlogs(result))
    }, [])


    const blogsForHome = [];
    for (let i = 0; i < 3; i++) {
        blogsForHome.push(blogs[i])
    }


    //SIGN IN METHODS HERE :
    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    // Observer :
    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        } else {

        }
    })
    // sign in with github :
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);

    }
    // log out :
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    const getUserName = e => {
        const userName = e.target.value;
        setUserName(userName)

    }
    const getUserEmail = e => {
        const userEmail = e.target.value;
        setUserEmail(userEmail)
    }
    const getUserPassword = e => {
        const userPassword2 = e.target.value;
        if (!/(?=.*[A-Z].*[A-Z])/.test(userPassword2)) {

            setUserPassword(''); // previous password reset
            return setPasswordError('Ensure password has two uppercase letters.')
        }
        if (!/(?=.*[0-9].*[0-9])/.test(userPassword2)) {

            setUserPassword(''); // previous password reset
            return setPasswordError('Ensure password has two digits.')
        }
        if (!/.{8}/.test(userPassword2)) {

            setUserPassword(''); // previous password reset
            return setPasswordError('Ensure password is of length 8.')
        }
        setUserPassword(userPassword2)
        setPasswordError('')
    }
    const getUserConfirmPassword = e => {
        const confirmPassword = e.target.value;
        setUserConfirmPassword(confirmPassword)
    }
    const handleSignUp = () => {

        if (userPassword !== userConfirmPassword) {
            return setError('Please match your password')
        }
        if (userName.length < 4) {
            return setError('Please write your full name')
        }

        return createUserWithEmailAndPassword(auth, userEmail, userPassword);

    }
    const handleLogin = () => {

        return signInWithEmailAndPassword(auth, userEmail, userPassword);

    }
    const forgetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                setError("Send reset password email")
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    // increase quantity 

    const addToDb = (quantity, productName) => {
        alert(`${quantity} items ${productName} added successfully. Thank You!`)
    }

    return {
        products,
        blogsForHome,
        signInWithGoogle,
        signInWithGithub,
        user,
        logOut,
        getUserConfirmPassword,
        getUserName,
        getUserEmail,
        getUserPassword,
        passwordError,
        handleSignUp,
        error,
        handleLogin,
        addToDb,
        blogs,
        forgetPassword,
        setUser,
        setError,
        auth,
        userName,
        setUserName,
        setUserEmail,
        setUserConfirmPassword,
        setUserPassword
    }
}
export default useFirebase;