import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="container mx-auto my-5 g-4">

            <div className="row row-cols-1 row-cols-md-2 gx-4 ">

                <div className="col">
                    <div className=" sanitizers-offer py-5 px-4 mt-2">
                        <h2 className="offer-header">Save 20%</h2>
                        <h2 className="sell-title">On Sanitizers</h2>
                        <p>99.9% Germ Production</p>
                        <button className="shop-now-button">Shop Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className=" gears-offer py-5 px-4 text-left mt-2">
                        <h2 className="offer-header">Save 15%</h2>
                        <h2 className="gears-sell-title">Protective Gears</h2>
                        <p>Covid Protextion</p>
                        <button className="shop-now-button">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;