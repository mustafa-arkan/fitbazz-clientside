import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';



const AddSer = () => {
const {user}=useContext(AuthContext)


const[order,setOrder]=useState({})



useEffect( ()=>{


fetch(`http://localhost:5000/addNewService?email=${user.email}`)
.then(res=>res.json())

.then(data=>setOrder(data))




},[user?.email])



    return (
        <div>


<h2>this is add :{order.length}</h2>


        </div>
    );
};

export default AddSer;