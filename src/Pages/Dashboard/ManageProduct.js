import React from 'react';

const ManageProduct = ({ part, handleDelete }) => {
    const { _id, name, shortDescription, minimumOrderQuantity, avaiableQuantity, price, img } = part;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <img src={img} alt="imgage" className='h-44'></img>
                <h2 className="text-xl  text-black"><span className='font-bold'>Name: </span>{name}</h2>
                <h2 className="  text-black text-justify"> <span className='font-bold'>Description: </span> {shortDescription}</h2>
                <h2 className="text-xl  text-black"> <span className='font-bold'>Minimum Order Quantity: </span>{minimumOrderQuantity}</h2>
                <h2 className="text-xl  text-black"> <span className='font-bold'>Avaiable Quantity: </span>{avaiableQuantity}</h2>
                <h2 className="text-2xl font-bold text-black">Price: {price}</h2>
            </div>
            <div className='w-2/4 mx-auto'>
                <button className="btn btn-primary uppercase text-white font-bold mb-6 " onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;