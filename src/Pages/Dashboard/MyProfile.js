import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const item = {
            email: user?.email,
            name: user?.displayName,
            Education: data.Education,
            Location: data.Location,
            City: data.City,
            Phone: data.Phone,



        }
        const Myurl = `https://still-tor-25168.herokuapp.com/MyProfile`;
        axios.post(Myurl, item)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("Your Profile store");
                }
            })
    };
    return (
        <div className='w-3/6 mx-auto m-10'>
            <h2 className='m-3 text-2xl'>Please add a Profile</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Name' value={user?.displayName} readOnly disabled type="text"  {...register("name")} />
                <input className=' input input-bordered w-full max-w-xs mb-2' placeholder='Email' type="email" readOnly disabled value={user?.email} {...register("email")} />
                <input className=' input input-bordered w-full max-w-xs mb-2' type="text" placeholder='Education' {...register("Education")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Location ' type="text" {...register("Location")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='City' type="text" {...register("City")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Phone Number' type="number" {...register("Phone")} />
                <input type="submit" className='btn btn-primary  max-w-xs p-3' value="Add Profile" />
            </form>
        </div>
    );
};

export default MyProfile;