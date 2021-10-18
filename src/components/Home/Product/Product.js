import React from 'react';
import './Product.css';
import Rating from '@mui/material/Rating';


const Product = ({ product }) => {
    const { img, name, price, rating, productType } = product;
    return (
        <div class="col">
            <div class="card product-container px-4 py-3">
                <img className="mb-2" src={img} alt="" />
                <div className="product-detail">
                    <p className="productType">{productType}</p>
                    <h5 className="product-name">{name}</h5>
                    <p className="rating"><Rating name="read-only" value={rating} readOnly /></p>
                    <p className="product-price">${price}</p>
                    <button className="see-more-button mb-2">See More</button>
                </div>


            </div>
        </div>

    );
};

export default Product;