import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { AuthContext } from '../../context/UserContext';



const Details = () => {

const {_id,img, price, title,description}=useLoaderData()
const {user}=useContext(AuthContext)

    return (
        <div className="row row-cols-md m-4">




<h2>{title}</h2> 

<div  className="col-md-6 col-sm-12">


<PhotoProvider>
      <PhotoView src={img}>
      <img src={img} alt="fitness" className='w-100' />
      </PhotoView>
    </PhotoProvider>



            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                <p className='text-2xl text-orange-600 font-semibold'> {description}</p>





        </div>





</div>
           
{/* review part form */}



<div className="col-md-6 col-sm-12 ">
                <h3>Give your valuabe review.</h3>
                <form >
                    <input defaultValue={user.name}  className="m-2 w-50" placeholder="Enter your name" /> <br />
                    <input defaultValue={user.email}  className="m-2 w-50" placeholder="Enter your name" /> <br />
                    <input  className="w-50 m-2" placeholder="Your Address" /> <br />
                    <input  type="number" className="m-2 w-50" placeholder="contact no" /> <br />

                    <input style={{ backgroundColor: "#0071c2", borderRadius: '6px', padding: '4px 8px', color: "white" }} type="submit" value="Review" className="m-2" />
                </form>
            </div>


{/* review part form end */}
</div>






    
    );
};

export default Details;




