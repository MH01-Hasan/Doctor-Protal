import React, { useContext } from 'react';
import { AuthContext } from '../../../Contex/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Myapporment = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data = [] } = useQuery({
        queryKey: [' bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessTocken')}`
                }
            })
            const data = await res.json()
            return data
        }
     

    })
console.log(data)

    return (
        <div>
            <h1 className='text-3xl font-bold mb-5'>My Apporment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}

                    <thead>
                        <tr>
                            <th>Sl.NO</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Appointment date</th>
                            <th>Time</th>
                            <th>Treatment Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data &&
                            data?.map((data, index) => <tr key={data?._id}>
                                <td>{index + 1}</td>

                                <td>{data?.patientName}</td>
                                <td>{data?.Phone}</td>
                                <td>{data?.appointmentdate}</td>
                                <td>{data?.slot}</td>
                                <td>{data?.treatmentName}</td>

                            </tr>

                            )

                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myapporment;