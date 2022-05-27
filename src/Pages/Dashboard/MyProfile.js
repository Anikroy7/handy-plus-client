import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);

    const [loadProfile, setLoadProfile] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user.email}`)
            .then(res => res.json())
            .then(data => setLoadProfile(data.result))
    }, [user])
    const handelMyProfile = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const age = event.target.age.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const profile = {
            email, name, phone, address, age, education
        }

        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`${name} , Your profile is updated`)
                    event.target.reset()
                    fetch(`http://localhost:5000/profile/${user.email}`)
                        .then(res => res.json())
                        .then(data => setLoadProfile(data.result))
                }
                else {
                    toast('no update for you')
                    event.target.reset()
                }
            })





    }
    console.log(loadProfile);


    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content ml-0 p-0 flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">My Profile!</h1>
                    <p class="m-3">Name : {user.displayName}</p>
                    <p class="m-3">Email : {user.email}</p>
                    <p class="m-3">Address : {loadProfile.address}</p>
                    <p class="m-3">Age : {loadProfile.age}</p>
                    <p class="m-3">Phone : {loadProfile.phone}</p>
                    <p class="m-3">Education : {loadProfile.education}</p>

                    {/* <p>{profile?.address}</p> */}

                </div>
                <div class="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelMyProfile}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" class="input input-bordered" disabled value={user.displayName} />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" value={user.email} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input name='phone' type="number" placeholder="Your phone number" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input name='address' type="text" placeholder="Your address" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input name='education' type="text" placeholder="Your Education" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Age</span>
                                </label>
                                <input name='age' type="number" placeholder="Your Age" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <input class="btn btn-primary" type='submit' value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;