import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar(props) {
  const pages = props.pages
  
  return (
    <nav className="navbar navbar-toggleable-sm">
      <button className="navbar-toggler navbar-light navbar-toggler-right" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarCollapse" 
              aria-controls="navbarCollapse" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <Link className="navbar-brand" to="/About"><div className="logo"></div></Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            {
              pages.map((key, index) => 
                <li key={index} className="nav-item">
                  <NavLink  activeStyle={{ color:'#014c8c' }} 
                            className="nav-link" 
                            to={`/${key}`}>{key}
                  </NavLink>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
