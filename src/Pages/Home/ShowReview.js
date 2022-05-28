import React from 'react';

const ShowReview = ({ review }) => {
    const { Rating, Review } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl p-10 mb-10">
            <div className="card-body ">

                <h2 className="text-black text-justify"> <span className='font-bold'>Review Text: </span> {Review}</h2>

                <h2 className="text-2xl font-bold text-black">Rating :  {Rating}/5</h2>
            </div>

        </div>
    );
};

export default ShowReview;