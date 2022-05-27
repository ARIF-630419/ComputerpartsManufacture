import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const { name, minimumOrderQuantity, avaiableQuantity } = purchase;
    const [user] = useAuthState(auth);

    const handlePurchase = event => {
        event.preventDefault();
        const Quantity = event.target.Quantity.value;
        console.log(Quantity);
        setPurchase(null);
    }
    return (
        <div>
            <input type="checkbox" id="Purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="Quantity" placeholder={`Minimum order quantity ${minimumOrderQuantity}`} min={minimumOrderQuantity} max={avaiableQuantity} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;