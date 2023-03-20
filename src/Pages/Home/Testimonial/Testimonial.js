import React from 'react';
import testImage from '../../../images/icon/quote.svg'
import reviewsImage1 from '../../../images/people1.png'
import reviewsImage2 from '../../../images/people2.png'
import reviewsImage3 from '../../../images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviewsdata = [
        {
            _id: 1,
            name: 'Tom Crouse',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quaerat repudiandae rem voluptas similique",
            location: 'London',
            image: reviewsImage1
        },
        {
            _id: 2,
            name: 'Mark Wood',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quaerat repudiandae rem voluptas similique",
            location: 'Uk',
            image: reviewsImage2
        },
        {
            _id: 3,
            name: 'Anisa',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro quaerat repudiandae rem voluptas similique",
            location: 'Bangladesh',
            image: reviewsImage3
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-bold '>Testimonial</h3>
                    <h1 className='text-4xl'>what Our Patient Say</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-44' src={testImage} alt="" />
                </figure>
            </div>


            <div className='flex justify-around flex-wrap mt-16 '>
                {
                    reviewsdata.map(data => <Review
                        key={data._id}
                        data={data}
                    ></Review>)
                }

            </div>

        </section>
    );
};

export default Testimonial;