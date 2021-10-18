import React from 'react';
import useAuth from '../../utilities/hooks/useAuth/useAuth';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const { products } = useAuth();
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Products</h1>
            <div className=" row category-container">
                <div className="col-lg-2 col-md-4 col-sm-4 col-6  text-center category py-3">
                    <img src="https://medik.wpengine.com/wp-content/uploads/2020/05/Medication.png" alt="" />
                    <p>Medication</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center category py-3">
                    <img src="https://medik.wpengine.com/wp-content/uploads/2020/05/Drugs.png" alt="" />
                    <p>Drugs</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center category py-3">
                    <img src="https://medik.wpengine.com/wp-content/uploads/2020/05/Laboratory.png" alt="" />
                    <p>Laboratory</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center category py-3">
                    <img src="https://medik.wpengine.com/wp-content/uploads/2020/05/Equipments.png" alt="" />
                    <p>Equipments</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center category py-3">
                    <img src="https://medik.wpengine.com/wp-content/uploads/2020/05/Radiology.png" alt="" />
                    <p>Radiology</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center category py-3">
                    <img src="https://medik.wpengine.com/wp-content/uploads/2020/05/Devices.png" alt="" />
                    <p>Device</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;