import React from "react";
import { Dropdown } from "react-bootstrap";

const AdminHeader = () => {
    return(
    <nav className="navbar navbar-dark bg-primary ">
    <div className="container-fluid">
        <a className="navbar-brand fs-3 px-5">Food Adda</a>
        <div className="btn-group ">
            <Dropdown>
                    <Dropdown.Toggle variant="primary" id="category-dropdown">
                        CATEGORY
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="addcategory.html">Add Category</Dropdown.Item>
                        <Dropdown.Item href="viewcategory.html">View & Delete Category</Dropdown.Item>
                        <Dropdown.Item href="viewallfood.html">View All Foods</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
        </div>
          <div className="btn-group">
          <Dropdown>
                    <Dropdown.Toggle variant="primary" id="category-dropdown">
                        RESTAURANTS
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="viewrestaurants.html">View & Delete Restaurant</Dropdown.Item>
                        <Dropdown.Item href="viewdeliverypersons.html">View Delivery Person Details </Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="btn-group">
          <Dropdown>
                    <Dropdown.Toggle variant="primary" id="category-dropdown">
                        CUSTOMERS
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >View Customers</Dropdown.Item>
                        <Dropdown.Item >View Customer Orders</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
          </div>
        <div className="lg-rg bg-primary mx-2 px-2">
            <a href="adminregister.html"><button type="button" className="btn btn-outline-light mx-2">Register</button></a>
            <a href="Welcome.html"><button type="button" className="btn btn-outline-light mx-2">Logout</button></a>
        </div>
    </div>
    </nav>
    )
}

export default AdminHeader;