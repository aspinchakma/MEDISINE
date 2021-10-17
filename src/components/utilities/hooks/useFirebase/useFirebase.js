import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

const useFirebase = () => {
    initializeAuthentication();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(response => response.json())
            .then(result => setProducts(result))
    }, [])




    return {
        products
    }
}
export default useFirebase;