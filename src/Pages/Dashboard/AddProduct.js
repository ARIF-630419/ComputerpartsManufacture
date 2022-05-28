import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://still-tor-25168.herokuapp.com/parts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    };
    return (
        <div className='w-3/6 mx-auto m-10'>
            <h2 className='m-3 text-2xl'>Please add a Item</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Part Name' type="text"  {...register("name")} />
                <textarea className=' input input-bordered w-full max-w-xs mb-2' placeholder='Short Description' type="text" {...register("shortDescription")} />
                <input className=' input input-bordered w-full max-w-xs mb-2' placeholder='Minimum order Quantity' {...register("minimumOrderQuantity")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Avaiable Quantity' type="number" {...register("avaiableQuantity")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='input input-bordered w-full max-w-xs mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" className='btn btn-primary  max-w-xs p-3' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;