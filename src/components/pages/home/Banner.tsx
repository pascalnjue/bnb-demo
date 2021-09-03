import React from 'react';
import Slider, {Settings as SlickSettings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LocationSliderItem, sliders} from "../../../samples";


const SliderItem = (props: { slider: LocationSliderItem }) => {
    const {slider} = props;

    return (
        <div className="card" style={{height: "40rem", paddingBottom: "1rem"}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slider.image} alt="" className="card-image"/>
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
    )
}

const Banner = () => {
    const settings: SlickSettings = {
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <section>
            <div className="container h-100 pt-3 mb-5">
                <Slider {...settings}>
                    {sliders.map((slider, index) => (
                        <SliderItem key={index} slider={slider}/>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Banner;