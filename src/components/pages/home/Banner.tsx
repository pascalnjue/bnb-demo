import React from 'react';
import houseImage from "../../../dummy_images/house.jpeg";

const Banner = () => {
    return (
        <section className="vh-75">
            <div className="container h-100 pt-3 pb-5">
                <div className="card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={houseImage.src} alt="" className="card-image"/>
                    <div className="card-img-overlay">
                        <div className="d-flex align-items-end h-100">
                            <div className="mb-2">
                                <h1 className="mb-2">Discover places to stay, wherever you are.</h1>
                                <p className="mb-3 col-md-9 lead">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid
                                    deleniti, doloremque enim esse facilis fugit laborum maxime mollitia nam nisi nobis
                                </p>
                                <div>
                                    <button className="btn btn-secondary btn-lg me-3">Discover Locations</button>
                                    <button className="btn btn-primary btn-lg">View Featured Places</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;