import React from 'react';
import { useLoaderData } from 'react-router-dom';




const Details = () => {

const {title}=useLoaderData()


    return (
        <div>
           

<h2>{title}</h2>


        </div>
    );
};

export default Details;




