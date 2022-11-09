import React from 'react';

import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Question from '../Question/Question';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Question></Question>
            <Login></Login>
            
        </div>
    );
};

export default Home;