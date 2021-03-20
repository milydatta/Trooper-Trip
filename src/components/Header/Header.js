import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';
import header from '../../images/header.png';

 const Header = () => {
  
return (
      <div  style={{ backgroundImage:`url(${header})` }}  className="header">
        <h1 className="logo">Trooper Trip</h1>
        <nav className="nav">
          <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/destination">Destination</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
               <Button variant="contained" color="primary" className="button"><Link to="/login">Login</Link></Button>
            </li>
            </ul>
          </nav>

          <div className="title-container">
                <h1>Start Cool Trip With Trooper Trip</h1>
                <h2>Request A Trip</h2>
            </div>
      </div>
    );
  }
  
export default Header;