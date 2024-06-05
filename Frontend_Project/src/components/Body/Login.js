import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="container border rounded my-5 py-5 shadow text-center ">
        <form className="px-5">
            <div className="header fs-1 text-center mb-5 bg-primary text-light rounded-top">
                LOGIN 
            </div>
            <div className="mb-3">
                <select className="form-select form-select-md mb-3" aria-label="Large select example" required>
                    <option selected>Select User Type</option>
                    <option value="1">Admin</option>
                    <option value="2">Customer</option>
                    <option value="3">Restaurant</option>
                    <option value="4">Delivery Person</option>
                  </select>
            </div>
            <div className="mb-3">
                <label for="emailId" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailId" placeholder="Enter Your Email-Id" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label for="pswd" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter Your Password" id="pswd" required/>
            </div>
            <div className="lg-rg mx-2 mt-5">
                <Link to="/admin"><button type="button" className="btn btn-outline-primary mx-2 px-3">LOGIN</button></Link>
                <Link to="/welcome"><button type="button" className="btn btn-outline-danger mx-2 px-4">EXIT</button></Link>
            </div>
        </form>
    </div>
    )
} 

export default Login;