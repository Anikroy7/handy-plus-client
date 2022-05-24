import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let signUpError;
    if (user) {
        navigate('/')
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        signUpError = <p>{error?.message}</p>
    }

    const onSubmit = data => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        if (password === confirmPassword) {
            console.log('ok');
            createUserWithEmailAndPassword(email, password)
        }
        else {
            signUpError = <p>{'Your password is wrong'}</p>

        }
    }
    return (
        <div>
            <div className='bg-red-100 w-96 mx-auto p-11 rounded-lg shadow-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-3xl text-center text-cyan-800 mb-3'>Sign Up </h3>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Type your name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Type your email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please give a valid email address'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Type your Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be six characters or long'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password?.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password?.message}</span>}

                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be six characters or long'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-700">{errors.confirmPassword?.message}</span>}
                            {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.confirmPassword?.message}</span>}

                        </label>

                        <div>{signUpError}</div>
                    </div>
                    <div>

                        <input className='btn btn-error text-yellow-100 w-full max-w-xs' type="submit" value='Log in' />
                    </div>
                </form>
                <p className='mt-5'>Already have an account? <span className='text-primary'><Link to='/login'>Login</Link></span></p>
                <div className="divider">OR</div>
            </div>
        </div>
    );
};

export default Signup;