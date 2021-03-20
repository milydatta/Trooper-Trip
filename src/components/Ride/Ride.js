import React from 'react';

const Ride = (props) => {
    const {imgUrl, title} = props.ride;
    const imgStyle = {height:'350px',border: '1px solid red', margin:'10px',padding:'10px'}
     
    return (
        <div style={imgStyle}>
             <img src={imgUrl} alt=""/>
             <h1>{title}</h1>
        </div>
        
    );
};

export default Ride;