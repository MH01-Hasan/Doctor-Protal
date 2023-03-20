import React from 'react';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import bannerImage from "../../../images/chair.png"

const Banner = () => {
    return (
        <div className="hero pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;