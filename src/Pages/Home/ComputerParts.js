import React, { useEffect, useState } from 'react';
import Part from './Part';

const ComputerParts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Computer Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>

        </section>
    );
};

export default ComputerParts;