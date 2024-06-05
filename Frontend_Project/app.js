import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import Images from './src/components/Images/image';
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";
import ShimmerEffect from "./src/components/ShimmerEffect/ShimmerEffect";
import { RouterProvider,Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./src/components/Error";
import Login from "./src/components/Body/Login";
import UserRegister from "./src/components/Body/UserRegister";
import AdminHeader from "./src/components/Header/AdminHeader";


var htmlRoot = document.getElementById("root");
var RootReact = ReactDOM.createRoot(htmlRoot);

const App = () => {
  return(
    <>
    {/* <ShimmerEffect/> */}
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

const Admin = () => {
  return(
    <>
      <AdminHeader/>
      <Outlet/>
    </>
  )
}

const Welcome = () => {
  return(
    <>
    <Body/>
    </>
  )
}
const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      children:[
        {
          path:"/welcome",
          element:<Welcome/>,
        },
        {
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/register",
          element:<UserRegister/>
        },
        {
          path:"/login/welcome",
          element:<Welcome/>,
        }
      ],
      errorElement:<Error/>
    },
    {
      path:"/admin",
      element:<AdminHeader/>,
      children:[
        {

        }
      ]
    }
  ]
)
// RootReact.render(<App />);

RootReact.render(<RouterProvider router={appRouter}/>)

// ReactDOM.render(<App />, document.getElementById("root"));
