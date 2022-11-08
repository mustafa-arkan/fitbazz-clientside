import React from 'react';

import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Question from '../Question/Question';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Question></Question>
            <Login></Login>
            
        </div>
    );
};

export default Home;