import React from 'react';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment.png'
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';


const MakeAppintment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appoinment})`,




            }}

        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" -mt-32 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h4 className='text-lg font-bold text-primary'>Appointment</h4>
                        <h1 className="text-5xl font-bold text-white">Make an Appointment!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppintment;