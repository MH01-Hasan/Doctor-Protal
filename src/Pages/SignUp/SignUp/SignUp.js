import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvider';
import { useState } from 'react';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { creatuser, updateUser } = useContext(AuthContext)
    const [createmail, setCreatemail] = useState('')
    const [token] = useToken(createmail)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true })
    }
    const onSubmit = data => {
        creatuser(data.email, data.password)

            .then((result) => {

                const namedispaly = {
                    displayName: data.name
                }
                updateUser(namedispaly)
                    .then(() => {
                        saveUsrs(data.name, data.email)


                    })
                    .catch((error) => { });


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    };
    //user information  save data base
    const saveUsrs = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                setCreatemail(email)


            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <p className="py-6 w-96">Welcome to Our Site Please Sign Up</p>
                </div>


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Your Name</span>
                                </label>
                                <input {...register("name", {
                                    required: "Name is required"
                                })} type="text" placeholder="Type here Your Name" className="input input-bordered w-full max-w-xs" />
                                {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Your Email</span>
                                </label>
                                <input {...register("email", {
                                    required: "Email Address is required"
                                })} type="text" placeholder="Type here Your email" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Your Password</span>
                                </label>
                                <input {...register("password", {
                                    required: "Password is required",
                                    pattern: { value: /(?=.*[A-Z])/, message: 'one uppercase letters' },
                                    minLength: { value: 8, message: 'Password must be 8 charector' }




                                })} type="password" placeholder="Type here Your Password" className="input input-bordered w-full max-w-xs" />
                                {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                            </div>


                            <label className="label">
                                <span className="label-text"> Forget Password ?</span>
                            </label>

                            <input type="submit" value='Sign UP' className='btn btn-primary mt-6' />
                        </form>

                        <label className="label">
                            <span className="label-text"> Alredy have an account ? Please <Link to='/Login' className='text-primary font-bold'>Login</Link></span>
                        </label>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;