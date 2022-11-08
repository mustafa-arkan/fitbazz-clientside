import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';







const Header = () => {

    const {user,logOut}=useContext(AuthContext)



    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <Container >
                <Link to="/"><Button  className='fw-bolder'  variant="">FITBAZZ</Button></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end ">

                    <Link to="/"><Button  className='fw-bolder'  variant="">Home</Button></Link>
                    <Link to="/blog"><Button  className='fw-bolder'  variant="">Blog</Button></Link>


                    {user ?. email && <span>Welcome,{user.email}</span>} 
                    <Link to="/login"><Button  className='fw-bolder'  variant="">Login</Button></Link>
                        {/* <Nav.Link  to="/home#offer">Offers</Nav.Link>
                        <Nav.Link  to="/home#gallery">Gallery</Nav.Link>
                        <Nav.Link  to="/home#features">Features</Nav.Link> */}
                        {/* {user?.email && <Nav.Link  to="/myOrders">My Orders</Nav.Link>}
                        {user?.email && <Nav.Link  to="/manageAllOrders">Manage All Orders</Nav.Link>}
                        {user?.email && <Nav.Link  to="/addNewService">Add a new service</Nav.Link>}

                        {!user?.email && < Link to='/login'><Button variant="outline-success">login</Button></Link>}
                        {user?.email && <span>{user?.displayName}</span>}
                        {user?.email && <Button onClick={logout} variant="outline-success">logout</Button>} */}
                        {/* </Nav> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
};

export default Header;