import React from 'react';

const Service = ({ data }) => {

    const { name, dis, icon } = data;
    return (
        <div className="card sm:pt-6 mt-6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <p>{dis}</p>
            </div>
        </div>
    );
};

export default Service;