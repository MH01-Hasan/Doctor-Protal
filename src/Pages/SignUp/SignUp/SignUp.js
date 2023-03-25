import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { creatuser } = useContext(AuthContext)

    const onSubmit = data => {

        creatuser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    };
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
                                    pattern: { value: /(?=.*[A-Z].*[A-Z])/, message: 'two uppercase letters' },
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

                        <div className="divider">OR</div>
                        <button className="btn btn-outline">Continue With Google</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;