import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";


const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState({})
    const [error, setError] = useState('');


    useEffect(() => {
        fetch('./products.json')
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
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)

            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
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
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
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

    return {
        products,
        blogsForHome,
        signInWithGoogle,
        signInWithGithub,
        user,
        logOut
    }
}
export default useFirebase;