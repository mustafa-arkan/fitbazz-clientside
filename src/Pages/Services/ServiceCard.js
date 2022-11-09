import React from 'react';

const ServiceCard = ({service}) => {

    const {_id,img, price, title,description} = service;


    return (
        <div    className="card card-compact w-25 bg-base-100 shadow-xl d-flex">
            <figure><img src={img} alt="fitness" className='w-100' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                <p className='text-2xl text-orange-600 font-semibold'> {description.slice(0,100)}</p>



                <div className="card-actions justify-end">


 <button className="btn btn-primary">See Details</button>

                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;