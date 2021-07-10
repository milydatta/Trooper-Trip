import React from 'react';

const Ride = (props) => {
    const {img, title} = props.ride;
     
    return (
        <div className="col-md-3">
             <img style={{height:'150px'}} src={img} alt=""/>
             <h1>{title}</h1>
        </div>
        
    );
};

export default Ride;