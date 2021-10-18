import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([])


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




    return {
        products,
        blogsForHome
    }
}
export default useFirebase;