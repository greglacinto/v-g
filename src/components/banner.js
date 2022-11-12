import '../styles/banner.css';
import bannerImg from '../assets/banner1.jpg';

import React from "react";



function Banner() {

    return (
        <section id='banner-section'>
                <div className="img-div">
                    <img src={bannerImg} alt='mr and mrs Odiase'/>
                </div>
        </section>
       
    );
}

export default Banner;



