import React from 'react';
// import Header from '../Header/Header';
 import Ride from '../Ride/Ride'

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        height:'200px',
        width: '200px',
        justifyContent: 'space-between'
    }


    const rides =[
        {
            imgUrl:'https://images-na.ssl-images-amazon.com/images/I/71C4Wn-ctcL._SX355_.jpg',
            title:'Cool Trip'
        },
        {
            imgUrl:'https://images-na.ssl-images-amazon.com/images/I/71%2B-nIoLdFL._SX355_.jpg',
            title:'Cool Trip'
        },
        {
            imgUrl:'https://image.shutterstock.com/image-vector/kids-toys-red-cartoon-kid-260nw-1408378007.jpg',
            title:'Cool Trip'
        },
        // {
        //     imgUrl:'https://image.shutterstock.com/image-photo/small-train-daming-palace-national-260nw-1323698975.jpg',
        //     title:'Cool Trip'
        // }
    ]
    return (
        
        <div style={style}>
           {
              rides.map(ride => <Ride ride={ride}></Ride>)
           }
        </div>

       
    );
};

export default Home;
