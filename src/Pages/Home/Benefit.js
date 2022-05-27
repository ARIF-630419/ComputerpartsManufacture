import React from 'react';

const Benefit = () => {
    return (
        <section className='bg-slate-500 text-white m-8 rounded'>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Benefits</h1>
            <p className='mx-20 my-2 text-xl text-justify'>
                The sole objective of computer-integrated manufacturing is to streamline production processes, delivering the following benefits:
            </p>
            <ol>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>1. Reduced costs – i.e. the cost of direct and indirect labour</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>2. Improved scheduling flexibility</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>3. Reduced downtime</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>4. Maintaining correct inventory levels</li>

            </ol>
            <p className='mx-20 my-2 pb-10 text-xl text-justify'>
                Ultimately, the goal is to achieve maximum efficiency, closing those gaps that obstruct productivity and result in the bottom-line taking a hit. Additionally, CIM plays a key role in gathering relevant, real-time data from the production floor. For instance, to optimize efficiency, CIM can monitor the operational performance of vital equipment. Arguably the biggest benefit of CIM is the increase in output capacity it brings. Manufacturing enterprises can go from concept to completion in rapid time, meaning they can produce more in shorter timeframes, which has a positive impact on profitability, customer retention and attracting new customers.
            </p>
        </section>
    );
};

export default Benefit;