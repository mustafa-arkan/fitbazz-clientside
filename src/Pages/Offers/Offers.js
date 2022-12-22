import React, { useEffect, useState } from 'react';
import AddSer from '../AddSer/AddSer';
import OffersCard from './OffersCard';

const Offers = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://fitbazz-server.vercel.app/offers')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])



    return (
        <div className='d-grid'>
        <div className='text-center mb-4 row '>
            <h2 className="text-2xl font-bold text-orange-600">My Services</h2>
            
        </div>
        <div className='d-flex  '>


            
            {
                services.map(service => <OffersCard
                    key={service._id}
                    service={service}
                ></OffersCard>)
            }

<div>


<AddSer></AddSer>
</div>

        </div>
    </div>
    );
};

export default Offers;