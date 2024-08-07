import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body"; 
import Error from "./src/components/Error";
import Login from "./src/components/Body/Login";
import UserRegister from "./src/components/Body/UserRegister";
import {AdminHeader, AddCategory, ViewAllCustomers, ViewCategory, ViewAllFoods, ViewAllRestaurants,
         ViewAllDeliveryPersons, ViewAllCustomerOrders, AdminRegister, UpdateCategory} from "./src/components/Admin/AdminPage";
import RestaurantRegister from "./src/components/Restaurant/RestaurantRegister";
import RestaurantHeader from "./src/components/Restaurant/RestaurantHeader";
import AddFood from "./src/components/Restaurant/AddFood";
import ViewMyFood from "./src/components/Restaurant/ViewMyFood";
import ViewAllMyDeliveryPersons from "./src/components/Restaurant/ViewAllMyDeliveryPersons";
import RegisterDeliveryPerson from "./src/components/Restaurant/RegisterDeliveryPerson";
import ViewAllMyResOrders from "./src/components/Restaurant/ViewAllMyResOrders";
import UpdateFood from "./src/components/Restaurant/UpdateFood";
import { UserProvider } from "./src/components/Body/UserContext";
import { CustomerHeader, MyCart, MyOrders, OrderPlaced, PaymentPortal } from "./src/components/Customer/CustomerPage";
import { DeliveryPersonHeader, MyDeliveryOrders, UpdateDeliveryStatus } from "./src/components/DeliveryPerson/DeliveryPerson";
import ViewFoodInfo from "./src/components/Body/viewfoodinfo";
import AssignDeliveryPerson from "./src/components/Restaurant/AssignDeliveryPerson";

const App = () => (
  <>
    <Header/>
    <Routes>
      <Route path="/home" element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/resregister" element={<RestaurantRegister />} />
      <Route path="/food-details/:foodId" element={<ViewFoodInfo />} />
      <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found', message: 'Page not found' }} />} />
    </Routes>
  </>
);

const Admin = () => (
  <>
    <AdminHeader />
    <Routes>
      <Route path="/home" element={<Body />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/viewcategory" element={<ViewCategory />} />
      <Route path="/updatecategory/:id" element={<UpdateCategory />} />
      <Route path="/viewallfood" element={<ViewAllFoods />} />
      <Route path="/viewallrestaurants" element={<ViewAllRestaurants />} />
      <Route path="/viewalldeliverypersons" element={<ViewAllDeliveryPersons />} />
      <Route path="/viewallcustomers" element={<ViewAllCustomers />} />
      <Route path="/viewallcustomerorders" element={<ViewAllCustomerOrders />} />
      <Route path="/adminregister" element={<AdminRegister />} />
      <Route path="/food-details/:foodId" element={<ViewFoodInfo />} />
      <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found', message: 'Page not found' }} />} />
    </Routes>
  </>
);


const Customer = () => (
  <>
    <CustomerHeader/>
    <Routes>
      <Route path="/home" element={<Body />} />
      <Route path="/mycart" element={<MyCart />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/paymentportal" element={<PaymentPortal />} />
      <Route path="/orderplaced" element={<OrderPlaced />} />
      <Route path="/food-details/:foodId" element={<ViewFoodInfo />} />
      <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found', message: 'Page not found' }} />} />
    </Routes>
  </>
);

const Restaurant = () => (
  <>
    <RestaurantHeader />
    <Routes>
      <Route path="/home" element={<Body />} />
      <Route path="/addfood" element={<AddFood />} />
      <Route path="/viewmyfoods" element={<ViewMyFood />} />
      <Route path="/updatefood/:id" element={<UpdateFood />} />
      <Route path="/deliverypersonregister" element={<RegisterDeliveryPerson />} />
      <Route path="/viewallresdeliveryper" element={<ViewAllMyDeliveryPersons />} />
      <Route path="/viewallrestaurantorders" element={<ViewAllMyResOrders />} />
      <Route path="/assigndeliveryperson" element={<AssignDeliveryPerson/>}/>
      <Route path="/food-details/:foodId" element={<ViewFoodInfo />} />
      <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found', message: 'Page not found' }} />} />
    </Routes>
  </>
);


const DeliveryPerson = () => (
  <>
    <DeliveryPersonHeader/>
    <Routes>
      <Route path="/home" element={<Body />} />
      <Route path="/mydeliveryorder" element={<MyDeliveryOrders />} />
      <Route path="/updatedeliverystatus" element={<UpdateDeliveryStatus />} />
      <Route path="/food-details/:foodId" element={<ViewFoodInfo />} />
      <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found', message: 'Page not found' }} />} />
    </Routes>
  </>
);
const MainRouter = () => (
  <Router>
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/welcome/*" element={<App />} />
      <Route path="/restaurant/*" element={<Restaurant />} />
      <Route path="/customer/*" element={<Customer />} />
      <Route path="/deliveryperson/*" element={<DeliveryPerson />} />
      <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found', message: 'Page not found' }} />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <MainRouter />
    </UserProvider>
  </React.StrictMode>
);
