import React, { useEffect, useState } from 'react';
import './services.css'
import ServiceCard from './ServiceCard';
import { Col, Row } from 'react-bootstrap';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://fitbazz-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])



    return (
        <div className=''>
            <div className='text-center mb-4  '> 
                <h2 className="text-2xl font-bold text-orange-600">My Services</h2>
                
            </div>



{/* <Row>

<Col lg="4" className='left'>

<ul>
<li>High Interest Intensity Interval Training</li>
<li>Fitness Bootcamp</li>
<li>Weight Training</li>
<li>Personal Training</li>
<li>Nutrition: Accountability & Counseling</li>
<li>Evaluation: Body Composition Testing</li>





</ul>




</Col>

<Col lg="8">



<div className='col-12 training'>


{
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }



</div>



</Col>





</Row>
 */}



            





<div className=' training'>


{
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }



</div>




{/* {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                } */}


 





        </div>
    );
};

export default Services;