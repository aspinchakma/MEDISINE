import React from 'react';
import './Product.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { img, name, price, rating, productType, id } = product;
    return (
        <div className="col">
            <div className="card product-container px-4 py-3">
                <img className="mb-2" src={img} alt="" />
                <div className="product-detail">
                    <p className="productType">{productType}</p>
                    <h5 className="product-name">{name}</h5>
                    <p className="rating"><Rating name="read-only" value={rating} readOnly /></p>
                    <p className="product-price">${price}</p>
                    <Link to={`/details/${id}`}> <button className="see-more-button mb-2">See More</button></Link>
                </div>


            </div>
        </div>

    );
};

export default Product;