import React from 'react';
import './Others.css';

const Others = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col ">
                    <div className="card offer-one  py-5 px-4">
                        <h5>Save 60%</h5>
                        <h5>Protective Masks</h5>
                        <button className="shop-now-button-others">SHOP NOW</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card offer-two  py-5 px-4">
                        <h5>Save 60%</h5>
                        <h5>Protective Masks</h5>
                        <button className="shop-now-button-others">SHOP NOW</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card offer-three  py-5 px-4">
                        <h5>Save 60%</h5>
                        <h5>Protective Masks</h5>
                        <button className="shop-now-button-others">SHOP NOW</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Others;