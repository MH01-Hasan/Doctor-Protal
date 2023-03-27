import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { login, singgoogle, user } = useContext(AuthContext)
    console.log(user)


    const [loginError, setLoginError] = useState('')

    const onSubmit = data => {
        setLoginError('')
        login(data.email, data.password)
            .then(() => {

            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage)

            });



    };

    const handelgoogle = () => {
        singgoogle()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 w-96">Provident cupiditate voluptatem et in.</p>
                </div>


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Your Email</span>
                                </label>
                                <input {...register("email", {
                                    required: "Email Address is required"
                                })} type="text" placeholder="Type here Your Name" className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Your Password</span>
                                </label>
                                <input {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: 'Password must be 8 charector' }

                                })} type="password" placeholder="Type here Your email" className="input input-bordered w-full max-w-xs" />
                                {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                                {loginError && <p className='text-red-600 '>{loginError} </p>}
                            </div>


                            <label className="label">
                                <span className="label-text"> Forget Password ?</span>
                            </label>

                            <input type="submit" value='Login' className='btn btn-primary mt-6' />
                        </form>
                        <label className="label">
                            <span className="label-text"> New to Doctor Protal  <Link to='/signup' className='text-primary font-bold'>Creat an Account</Link></span>
                        </label>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline" onClick={handelgoogle}>Continue With Google</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;