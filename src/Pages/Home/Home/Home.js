import React from 'react';
import Banner from '../Banner/Banner';
import InfoCardes from '../InfoCardes/InfoCardes';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCardes></InfoCardes>
            <Services></Services>
        </div>
    );
};

export default Home;