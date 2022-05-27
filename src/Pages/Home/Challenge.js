import React from 'react';

const Challenge = () => {
    return (
        <section className='bg-slate-500 text-white rounded'>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5 '>Challenges</h1>
            <p className='mx-20 my-2 text-xl text-justify'>
                Computers are prone to damage, especially in an industrial setting. The knock on effects of computer failure, for an enterprise that relies solely on computers remaining operational, can be catastrophic and result in:
            </p>
            <ol>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>1. Extended periods of downtime</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>2. Idle staff</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>3. Reduced production</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>4. Increased lead times</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>5. Customer dissatisfaction</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>6. Reputational damage</li>
                <li className='mx-20 my-2 pb-1 text-xl text-justify'>7. Loss of market share</li>

            </ol>
            <p className='mx-20 my-2 pb-10 text-xl text-justify'>
                When integrated, CIM is responsible for the complete production process. With so much riding on its performance, its baffling that many manufacturing firms fail to invest in adequate protection for what is undoubtedly a capital asset.For instance, specially designed environmental computer enclosures are readily available and exist to protect CIM processes. They are a safe-haven for computers, shielding against external elements such as dust, dirt and liquids and even forklift trucks, just in case Dave accidentally reverses into a computer thats critical to a production operation.
            </p>
        </section>
    );
};

export default Challenge;