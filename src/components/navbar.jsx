import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
      <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: '#e3f2fd', padding: '15px'}}>
              <div className="container">
                <a className="navbar-brand mr-4" href="#" style={{fontSize: '1.5em', color: "black"}}>Duka.com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarToggle" style={{color: 'black'}}>
                  <div className="navbar-nav ms-auto" style={{textAlign: 'right'}}>
                    <div className="nav-item">
                        <Link to="/" className="mr-4 nav-link" href="#" style={{color: "black"}}>Home</Link>
                    </div>
                    <div className="nav-item">
                        <a className="mr-4 nav-link" href="#" style={{color: "black"}}>Register</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <br/>
            <br/>
        </header>
        </>
    )
}

export default NavBar