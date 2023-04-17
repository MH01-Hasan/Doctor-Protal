import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query'

const AvailableAppointment = ({ selected }) => {

    const [treatment, seTreatment] = useState(null)

    // fetch data in react Query//
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())

    })
    // fetch data in react Query//


    return (
        <section>
            <h1 className='text-center text-primary font-bold mt-6'>Available Appointment in {format(selected, 'PP')}</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-clos-1 mx-24 mt-16'>
                {
                    appointmentOptions.map((data, i) => <AppointmentOptions
                        key={i}
                        data={data}
                        seTreatment={seTreatment}

                    ></AppointmentOptions>)
                }

            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selected={selected}
                    seTreatment={seTreatment}

                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointment;