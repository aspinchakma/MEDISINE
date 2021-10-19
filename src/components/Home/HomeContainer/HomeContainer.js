import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Offer from '../Offer/Offer';
import Others from '../Others/Others';
import OurTeam from '../OurTeam/OurTeam';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';

const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <Blogs></Blogs>
            <h2 className="text-center py-3">Meet Our Team</h2>
            <OurTeam></OurTeam>
            <Others></Others>
            <Subscribe></Subscribe>
            <CompanyLogo></CompanyLogo>
        </div>
    );
};

export default HomeContainer;