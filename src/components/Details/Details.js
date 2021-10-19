import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../utilities/hooks/useAuth/useAuth';
import './Details.css';
import Rating from '@mui/material/Rating';
import { Spinner } from 'react-bootstrap';

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();
    const { products, addToDb } = useAuth();
    const product = products.find(pro => pro.id == productId);


    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="container py-4 px-4 my-5">

            {
                product?.name ? <div className="row">
                    <div className="col-lg-5 img-container">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-5 px-4">
                        <h2>{product.name}</h2>
                        <p className="rating"><Rating name="read-only" value={product.rating} readOnly /></p>
                        <p>{product.description}</p>
                        <h5 className="product-price">${product.price}(<span>{product.totalBuy} total sell</span>)</h5>
                        <div className="d-flex mt-3 quantity-section align-items-center">
                            <h2><button className="sign-methods " onClick={decreaseQuantity}>-</button> <span>{quantity > 9 ? quantity : `0 ${quantity}`}</span> <button className="sign-methods"
                                onClick={increaseQuantity}
                            >+</button></h2>
                            <button onClick={() => addToDb(quantity, product.name)} className="add-to-cart-button"><i class="fas fa-cart-plus"></i> ADD TO CART</button>
                        </div>
                    </div>
                </div> :
                    <div className="loading-spinner py-5 my-5">
                        <Spinner animation="grow" variant="primary" />
                    </div>
            }

        </div>
    );
};

export default Details;