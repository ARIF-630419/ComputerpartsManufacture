import React from 'react';
import useParts from '../hooks/useParts';
import Purchase from './Purchase';

const Purchases = () => {
    const [parts, setParts] = useParts()
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Computer Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Purchase
                        key={part._id}
                        part={part}
                    ></Purchase>)
                }
            </div>

        </section>
    );
};

export default Purchases;