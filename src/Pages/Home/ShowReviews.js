import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <section>
            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ShowReview
                        key={review._id}
                        review={review}
                    ></ShowReview>)
                }
            </div>
        </section>
    );
};

export default ShowReviews;