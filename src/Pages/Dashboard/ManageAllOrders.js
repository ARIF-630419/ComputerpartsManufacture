import React, { useEffect, useState } from 'react';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allorder')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Manage All orders</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    orders.map(order => <ManageAllOrder
                        key={order._id}
                        order={order}
                    ></ManageAllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;