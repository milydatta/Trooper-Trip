import React from 'react';
import { Link } from 'react-router-dom';

const Ride = (props) => {
    const {img, title} = props.ride;
     
    return (
        <div className="col-md-3" style={{transform:'translateY(-500px)'}}>
             <img style={{height:'150px'}} src={img} alt=""/>
            <Link to="/destination" className="text-success" style={{textDecoration:'none'}}><h1>{title}</h1></Link>
        </div>
        
    );
};

export default Ride;
