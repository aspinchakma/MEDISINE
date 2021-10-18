import React from 'react';
import './CompanyLogo.css';
const CompanyLogo = () => {

    return (
        <div>
            <div className="row row-cols-4 row-cols-md-4 g-4 company-container container mx-auto">

                <div className="col">
                    <div className="card">
                        <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/6.jpg" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/3.jpg" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/5.jpg" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/brand/4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyLogo;