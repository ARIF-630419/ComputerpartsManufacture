import React, { useState } from 'react';
import useParts from '../hooks/useParts';
import Purchase from './Purchase';
import PurchaseModal from './PurchaseModal';

const Purchases = () => {
    const [parts, setParts] = useParts();
    const [purchase, setPurchase] = useState(null);
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Computer Parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Purchase
                        key={part._id}
                        part={part}
                        setPurchase={setPurchase}
                    ></Purchase>)
                }
            </div>
            {purchase && <PurchaseModal
                purchase={purchase}
                setPurchase={setPurchase}
            ></PurchaseModal>}

        </section>
    );
};

export default Purchases;