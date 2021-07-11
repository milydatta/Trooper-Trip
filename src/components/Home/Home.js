import React from 'react';
import Header from '../Header/Header';
import Ride from '../Ride/Ride';
import bike from '../../images/bike.png';
import car from '../../images/car.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const rides =[
        {
            img:bike,
            title:'bike'
        },
        {
            img:car,
            title:'car'
        },
        {
            img:bus,
            title:'bus'
        },
        {
            img:train,
            title:'train'
        }
    ]
    return (
          <div>
              <Header></Header>
          <div className="d-flex justify-content-center" >
          <div className="w-75 row mt-5 pt-5">
           {
              rides.map(ride=> <Ride ride={ride} key={ride.key}></Ride>)
           }
        </div>
        </div>

        </div>
    );
};

export default Home;
