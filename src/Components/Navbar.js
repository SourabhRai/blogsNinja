import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
const Navbar = (props) => {
    return (
      <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
    );
}
Navbar.propTypes =
{
    title: PropTypes.string,
    links: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Blog Page',
    links:"About" ,
    Dropdown:'More Options'
  };
export default Navbar;
