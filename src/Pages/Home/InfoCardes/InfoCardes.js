import React from 'react';
import icon1 from '../../../images/icon/clock.svg'
import icon2 from '../../../images/icon/marker.svg'
import icon3 from '../../../images/icon/phone.svg'
import InfoCard from './InfoCard';

const InfoCardes = () => {

    const CardData = [
        {
            id: '1',
            name: 'Opining Hours',
            discription: 'Open 9.00am to 5.00pm Everyday',
            icon: icon1,
            bgclass: 'bg-gradient-to-r from-primary to-secondary'

        },
        {
            id: '2',
            name: 'Visit Our Location',
            discription: '631/1 willson Road,Banani,Dhaka',
            icon: icon2,
            bgclass: 'bg-accent'

        },
        {
            id: '3',
            name: 'Contact us',
            discription: '+99347961',
            icon: icon3,
            bgclass: 'bg-gradient-to-r from-primary to-secondary'

        }
    ]
    return (


        <div className='grid lg:pt-20 grid-clos-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                CardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }


        </div>

    );
};

export default InfoCardes;