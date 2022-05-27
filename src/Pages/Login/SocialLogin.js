import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import google from '../../images/login/google.png'
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let googleError;
    const [token] = useToken(user);

    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        googleError = <p>{error?.message}</p>
    }
    const handelGoogleSign = () => {
        signInWithGoogle()
    }

    return (
        <div>
            <p>{googleError}</p>

            <button onClick={handelGoogleSign} class="btn w-full btn-square btn-error"><span className='mr-3'><img style={{ height: '30px' }} src={google} alt="" /></span><span>Sign with google</span></button>
        </div>
    );
};

export default SocialLogin;