import React from 'react';
import Banner from '../Banner/Banner';
import ConactUs from '../ConactUs/ConactUs';
import FourthSectionHome from '../FourthSectionHome/FourthSectionHome';
import InfoCardes from '../InfoCardes/InfoCardes';
import MakeAppintment from '../MakeAppintment/MakeAppintment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCardes></InfoCardes>
            <Services></Services>
            <FourthSectionHome></FourthSectionHome>
            <MakeAppintment></MakeAppintment>
            <Testimonial></Testimonial>
            <ConactUs></ConactUs>
        </div>
    );
};

export default Home;