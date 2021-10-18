import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Offer from '../Offer/Offer';
import Others from '../Others/Others';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';

const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <Others></Others>
            <Blogs></Blogs>
            <Subscribe></Subscribe>
        </div>
    );
};

export default HomeContainer;