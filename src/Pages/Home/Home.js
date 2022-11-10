import React from 'react';
import { Link } from 'react-router-dom';
import AddSer from '../AddSer/AddSer';


import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Question from '../Question/Question';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <div className='gap-2 col-6 mx-auto m-5 '>
  <button className='btn btn-dark text-dark' type="button"><Link to='/service'  >See All</Link></button>
  
</div>






            <AddSer></AddSer>
            <Question></Question>
            <Login></Login>
            
        </div>
    );
};

export default Home;