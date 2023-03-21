import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selected }) => {
    const [appointmentOptions, setappointmentOptions] = useState([])

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setappointmentOptions(data))
    }, [])


    return (
        <section>
            <h1 className='text-center text-primary font-bold mt-6'>Available Appointment in {format(selected, 'PP')}</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-clos-1 mx-24 mt-16'>
                {
                    appointmentOptions.map(data => <AppointmentOptions
                        key={data._id}
                        data={data}
                    ></AppointmentOptions>)
                }

            </div>

        </section>
    );
};

export default AvailableAppointment;