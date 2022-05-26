import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let loginError;
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
            loginError = <p className='text-red-600 mb-4'>Your password is wrong</p>
        }
        else if (error.message === 'Firebase: Error (auth/user-not-found).') {
            loginError = <p className='text-red-600 mb-4'>User No found !! <Link className='text-green-800' to={'/signup'}>Create Account Please</Link></p>
        }
        else {
            loginError = <p className='text-red-600 mb-4'>{error.message}</p>
        }
    }

    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };
    return (
        <div>
            <div className='bg-red-100 w-96 mx-auto p-11 rounded-lg shadow-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        {loginError}
                    </div>
                    <div>
                        <input className='btn btn-error text-yellow-100 w-full max-w-xs' type="submit" value='Log in' />
                    </div>
                </form>
                <p className='mt-5'>New to Handy Plus? <span className='text-primary'><Link to='/signup'>Create New Account</Link></span></p>
                <div className="divider">OR</div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;