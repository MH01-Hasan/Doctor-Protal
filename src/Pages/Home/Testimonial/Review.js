import React from 'react';

const Review = ({ data }) => {
    const { name, image, review, location } = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
            <div className="card-body">
                <p>{review}</p>

                <div className='flex items-center mt-8'>
                    <figure>
                        <img className='w-16 border-2 border-primary rounded-full' src={image} alt="" />
                    </figure>
                    <div className='ml-4'>
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;