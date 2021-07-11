import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Map from '../../images/Map.png';
import './Destination.css';
import { UserContext } from '../../App';




const Destination = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    return (
        <section>
            <div className="fixed-top">
            <h1 className="logo mt-3 fixed-top">Trooper Trip</h1>
         <nav className="nav fixed-top">
            <ul  className="mt-3">
            <li>
                <Link to="/home" className="text-dark">Home</Link>
            </li>
            <li>
                <Link to="/destination"  className="text-dark">Destination</Link>
            </li>
            <li>
                <Link to="/blog"  className="text-dark">Blog</Link>
            </li>
            <li>
                <Link to="/contact"  className="text-dark">Contact</Link>
            </li>
            <li>
               <h3 className="text-dark ms-2" style={{paddingLeft:450,margin:-30}}>{loggedInUser.name}</h3>
            </li>
            </ul>
          </nav>
          </div>
          <div className="container-fluid row mt-5">
            <div className="col-md-2 mt-5">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mt-5">
            <div  style={{ backgroundImage:`url(${Map})`}} className="map">
            </div>
            </div>
          </div>
        </section>
    );
};

export default Destination;