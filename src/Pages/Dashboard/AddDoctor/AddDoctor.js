import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const {data,isLoading}=useQuery({
        queryKey:["speciality"],
        queryFn: async ()=>{
          const res = await  fetch('http://localhost:5000/appointmentspecility')
           const data = await res.json()
           return data
        }
    })

    const onSubmit = data => {
  console.log(data)
    };
    if(isLoading){
        return <p>Loading ..................</p>
    }
    return (
        <div>
            <div className='border-solid border-2 w-96 '>
             <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Doctor  Name</span>
                    </label>
                    <input {...register("name", {
                        required: "Name is required"
                    })} type="text" placeholder="Type here Doctor Name" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Doctor Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email Address is required"
                    })} type="text" placeholder="Type here Your email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register("speciality")} className="input input-bordered w-full max-w-xs">
                    <option disabled selected>Select Doctor Speciality </option>
                    {
                                data?.map((data, i) => <option
                                    key={i}
                                    value={data.name}
                                >
                                    {data.name}
                                </option>)
                            }
                </select>
                    {errors.speciality && <p className='text-red-600' role="alert">{errors.speciality?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Doctor  Image</span>
                    </label>
                    <input {...register("img", {
                        required: "image is required"
                    })} type="file" placeholder="image" className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                </div>



                <input type="submit" value='Add Doctor' className='btn btn-primary mt-6' />
                </form>


            </div>
           
          
            
        </div>
    );
};

export default AddDoctor;