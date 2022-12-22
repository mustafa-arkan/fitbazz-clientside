import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddNewService from "../Pages/AddNewService/AddNewService";
import AddSer from "../Pages/AddSer/AddSer";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Offers from "../Pages/Offers/Offers";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";




export const routes=createBrowserRouter([

{

path:'/',
element:<Main></Main>,
children:[

{
path:'/',
element:<Home></Home>


},
{
path:'/blog',
element:<Blog></Blog>


},
{

path:'/login',
element:<Login></Login>


},
{

    path:'/register',
    
    element:<Register></Register>
    
    
    },
    {

path:'/addService',
element:<AddNewService></AddNewService>



    },
    
    
    {


path:'/addNewService',
element:<AddSer></AddSer>


    },

    {

path:'/details/:id',
element:<Details></Details>,
loader:({params})=>fetch(`https://fitbazz-server.vercel.app/services/${params.id}`)


    },
    {

path:'orders',
element:<MyReview></MyReview>





    },
    {
path:'/service',
element:<Services></Services>




    },
    {

path:'/offers',
element:<Offers></Offers>



    }
    


    









]




}












])