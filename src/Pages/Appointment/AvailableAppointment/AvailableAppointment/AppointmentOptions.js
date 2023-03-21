import React from 'react';

const AppointmentOptions = ({ data }) => {
    const { name, slots } = data
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-6">
            <div className="card-body items-center text-center text-primary">
                <h2 className="card-title">{name}!</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "Speces" : "Specs"} Avaiable</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Book Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;
