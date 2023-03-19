import React from 'react';

const InfoCard = ({ card }) => {
    const { name, discription, icon, bgclass } = card;

    return (
        <div className={`card lg:card-side shadow-xl lg:m-16 sm:pt-6 mt-6 p-6 text-white ${bgclass}`}>
            <figure><img className='w-16' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>

            </div>
        </div>

    );
};

export default InfoCard;