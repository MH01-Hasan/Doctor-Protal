import React, { } from 'react';
import appointmentImage from '../../../images/chair.png'
import { DayPicker } from 'react-day-picker';
import bgimage from '../../../images/bg.png'

const AppointmentBanner = ({ selected, setSelected }) => {


    return (
        <header className='my-6'
            style={{
                background: `url(${bgimage})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={appointmentImage} alt='' className=" max-w-sm rounded-lg" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        ></DayPicker>


                    </div>
                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;