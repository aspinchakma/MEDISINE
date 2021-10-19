import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <div className="container team-container mb-4">

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div className="d-flex align-items-center mini-team-container">
                        <div>
                            <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/clients/item-4.jpg" alt="" />
                        </div>

                        <div className="ps-3">
                            <h3>Britney Spear</h3>
                            <p className="team-position">MANAGER</p>
                            <p className="under-line"></p>
                            <div className="icon-container">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-skype"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col px-2">
                    <div className="d-flex align-items-center mini-team-container">
                        <div>
                            <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/clients/item-5.jpg" alt="" />
                        </div>
                        <div className="ps-3">
                            <h3>Jenifer Aniston</h3>
                            <p className="team-position">PHARMACIST</p>
                            <p className="under-line"></p>
                            <div className="icon-container">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-skype"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;