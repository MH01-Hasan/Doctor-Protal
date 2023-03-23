import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selected, seTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP')


    const handelBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value
        const patientName = form.patientName.value
        const email = form.email.value
        const Phone = form.Phone.value

        const BookingData = {
            appointmentdate: date,
            treatmentName: name,
            bookingcreationdate: (new Date()),
            slot,
            patientName,
            email,
            Phone,

        }
        // model off whwen data save to server then model of and dispaly show success massage
        seTreatment(null)

        console.log(BookingData)


    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handelBooking} className='mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered input-accent mt-3  w-full " />

                        <select name='slot' className="select select-bordered  mt-3 w-full ">
                            <option disabled selected>Select your Time</option>
                            {
                                slots?.map((data, i) => <option
                                    key={i}
                                    value={data}
                                >
                                    {data}
                                </option>)
                            }
                        </select>
                        <input name='patientName' type="text" required placeholder="Your Name" className="input input-bordered input-accent mt-3  w-full " />
                        <input name='email' type="email" required placeholder="Email" className="input input-bordered input-accent  mt-3 w-full " />
                        <input name='Phone' type="text" required placeholder="Phone" className="input input-bordered input-accent mt-3  w-full " />
                        <br></br>
                        <input type="submit" value="Submite" className='cursor-pointer mt-6 bg-primary p-4 w-32 h-12 rounded-lg text-white font-bold' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookingModal;