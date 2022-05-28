import React from 'react';
import useParts from '../../hooks/useParts';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [parts, setParts] = useParts();

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://still-tor-25168.herokuapp.com/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(part => part._id !== id);
                    setParts(remaining);
                })
        }
    }
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Manage Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
                {
                    parts.map(part => <ManageProduct
                        key={part._id}
                        part={part}
                        handleDelete={handleDelete}
                    ></ManageProduct>)
                }
            </div>
        </section>
    );
};

export default ManageProducts;