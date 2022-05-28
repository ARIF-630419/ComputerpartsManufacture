import React from 'react';

const ManageAllOrder = ({ order }) => {
    const { orderId, partsName, Quantity, email, price } = order;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className=" text-xl  text-black"><span className='font-bold'>Order Id: </span>{orderId}</h2>
                <h2 className=" text-xl text-black text-justify"> <span className='font-bold'>Part Name: </span> {partsName}</h2>
                <h2 className="text-xl  text-black"> <span className='font-bold'>Quantity: </span>{Quantity}</h2>
                <h2 className="text-xl  text-black"> <span className='font-bold'>Email : </span>{email}</h2>
                <h2 className="text-2xl font-bold text-black">Per Unit Price: {price}</h2>
            </div>
            <div className='w-2/4 mx-auto'>
                <button className="btn btn-primary uppercase text-white font-bold mb-4 ">Shipped</button>
            </div>
        </div>
    );
};

export default ManageAllOrder;