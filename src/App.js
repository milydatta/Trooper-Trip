import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
         <Switch>
         <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            <Route path="/blog">
              <Blog />
            </Route>
            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;



