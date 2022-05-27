import React from 'react';
import customer from '../../assets/images/customer.png';
import revenue from '../../assets/images/revenue.png';
import review from '../../assets/images/review.png';
import tools from '../../assets/images/tools.png';
const BussinessSummary = () => {
    return (
        <section>

            <h1 className='text-center text-4xl text-lime-500 pt-12 pb-5'>Bussines Summary</h1>
            <div className='mt-5 p-4 m-5 h-36 w-11/12 mx-auto '>
                <div className="stats shadow w-11/12 ">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={customer} alt="customer" />
                        </div>
                        <div className="stat-title text-xl pb-2">Customer</div>
                        <div className="stat-value">100K+</div>

                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={revenue} alt="revenue" />
                        </div>
                        <div className="stat-title text-xl pb-2">Annual  Revenue</div>
                        <div className="stat-value">$120M+ </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={review} alt="review" />
                        </div>
                        <div className="stat-title text-xl pb-2">Reviews</div>
                        <div className="stat-value">52K+</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={tools} alt="tools" />
                        </div>
                        <div className="stat-title text-xl pb-2">Tools</div>
                        <div className="stat-value">60+</div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default BussinessSummary;