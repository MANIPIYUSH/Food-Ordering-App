import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import {createBrowserRouter,
  RouterProvider,Outlet} from "react-router-dom";
import RestrauntMenu from "./components/RestrauntMenu";


const AppLayout = () => {
  return (   
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout /> ,
    errorElement:<Error/>,
    children:[{
      path:"/",
      element:<Body /> ,
    },
    {
      path:"/about",
      element:<About /> ,
    }, 
    {
      path:"/contact",
      element:<Contact/>,
    },{
      path:"/restaurant/:resId",
      element:<RestrauntMenu/>,
    },],
  }, 
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

