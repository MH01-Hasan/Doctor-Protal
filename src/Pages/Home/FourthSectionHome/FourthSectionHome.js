import React from 'react';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import fourthsectionimage from '../../../images/treatment.png'

const FourthSectionHome = () => {
    return (
        <div className="card mt-16 mx-auto lg:w-3/4 lg:card-side">
            <figure><img className='lg:h-96' src={fourthsectionimage} alt="Movie" /></figure>
            <div className="card-body lg:w-64">
                <h2 className="card-title text-4xl">Exceptional Dental Care,On Your Terms</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita quam qui perspiciatis maxime laboriosam iusto officiis sint modi quas?</p>
                <div className="card-actions justify-start">
                    <PrimaryButton>Watch</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default FourthSectionHome;