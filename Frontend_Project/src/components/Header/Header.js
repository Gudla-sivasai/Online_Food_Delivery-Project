  import React from "react";
  import { Link } from "react-router-dom";

  const Header = () => {
    return (
      <>
        <nav className="navbar navbar-dark bg-primary ">
          <div className="container-fluid">
            <a className="navbar-brand fs-3 px-5">Food ADDA</a>
            <div className="lg-rg bg-primary mx-2 px-2">
              <Link to="/login">
                <button type="button" className="btn btn-outline-light mx-2">
                Login 
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-outline-light mx-2">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
  }

  export default Header;
