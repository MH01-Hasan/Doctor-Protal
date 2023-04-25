import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Contex/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const BookingModal = ({ treatment, selected, seTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP')
    const { user } = useContext(AuthContext)
    const bookingCreat = new Date()
    const creat = format(bookingCreat, 'PP')

    //User Input  collection for apporment Form  Handel//
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
            bookingcreationdate: creat,
            slot,
            patientName,
            email,
            Phone,

        }
        //......................................Apporment Data Sent Database.............................////
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BookingData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    toast.success('Successfully Appointment!')
                    seTreatment(null)
                    refetch()
                }
                else {
                    toast.error(data?.massege)
                }


            })

        // model off whwen data save to server then model of and dispaly show success massage

    }

    return (
        <div>
            <Toaster
                position="top-right" />

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handelBooking} className='mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered input-accent mt-3  w-full " />

                        <select name='slot' required className="select select-bordered  mt-3 w-full ">
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
                        <input name='patientName' type="text" defaultValue={user?.displayName} disabled required placeholder="Your Name" className="input input-bordered input-accent mt-3  w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled required placeholder="Email" className="input input-bordered input-accent  mt-3 w-full " />
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