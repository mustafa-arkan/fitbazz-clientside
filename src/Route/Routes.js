import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddNewService from "../Pages/AddNewService/AddNewService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";




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

path:'/addNewService',
element:<AddNewService></AddNewService>



    }










]




}












])