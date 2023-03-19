import React from 'react';
import serviceIcon1 from '../../../images/fluoride.png'
import serviceIcon2 from '../../../images/cavity.png'
import serviceIcon3 from '../../../images/whitening.png'
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: "1",
            name: "Fluoride Treatment",
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas unde pariatur',
            icon: serviceIcon1,
        },
        {
            id: "2",
            name: "Cavity Filling",
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas unde pariatur',
            icon: serviceIcon2,
        },
        {
            id: "3",
            name: "Teeth whitening",
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas unde pariatur',
            icon: serviceIcon3,
        },
    ]
    return (

        <div>
            <div className='text-center pt-16 pb-3'>
                <h4 className=' text-base text-primary font-semibold'>Our service</h4>
                <h1 className='text-2xl'>services We Provides</h1>

            </div>
            <div className='flex flex-wrap justify-around'>
                {
                    serviceData.map(data => <Service
                        key={data.id}
                        data={data}
                    ></Service>)

                }



            </div>
        </div>
    );
};

export default Services;

// grid pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3