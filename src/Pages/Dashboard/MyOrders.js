import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    return (
        <div>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>My Orders</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;