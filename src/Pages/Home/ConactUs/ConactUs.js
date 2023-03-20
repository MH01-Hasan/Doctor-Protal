import React from 'react';
import PrimaryButton from '../../../Component/PrimaryButton/PrimaryButton';
import contactUs from "../../../images/appointment.png"

const ConactUs = () => {
    return (
        <section className=''
            style={{
                background: `url(${contactUs})`
            }}
        >
            <div className="hero ">
                <div className="mb-16">
                    <h4 className='text-primary font-bold flex justify-center mt-16'>Contact us</h4>
                    <h1 className='text-4xl font-bold mb-16 flex justify-center text-white'>Stay Connected With Us</h1>

                    <div className="card shadow-2xl bg-base-100">
                        <div className="card-body w-96">
                            <div className="form-control">

                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your Massage" className="input input-bordered" />

                            </div>
                            <div className="">
                                <PrimaryButton>submite</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ConactUs;