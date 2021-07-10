import React, { useContext, useState } from 'react';
import './Login.css';
import header from '../../images/header.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:''
    })
   if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
    
const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {userName: displayName, email}
        setLoggedInUser(signedInUser);
        history.replace(from);
    })
    .catch(err =>{
         console.log(err);
        console.log(err.message);
     })
    }
      const handleSignOut = () =>{
       firebase.auth().signOut()
       .then(res => {
            const signedOutUser = {
              isSignedIn: false,
              name:'',
              email:'',
              error:'',
              success: false
            }
            setUser(signedOutUser);
       })
      .catch(err => {
          
      })
  }
    const handleBlur = (event) =>{
       let isFormValid = true;
        if(event.target.name === 'email'){
             isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
                 
        }
    }
    const handleSubmit = (event) => {
        if(newUser && user.email && user.password){
                  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                  .then(res => {
                     const  newUserInfo = {...user};
                     newUserInfo.error = '';
                     newUserInfo.success = true;
                      setUser(newUserInfo);
                  })
                  .catch(error => {
                    const  newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ..
                  });
    }
    if(!newUser && user.email && user.password){
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                 const  newUserInfo = {...user};
                 newUserInfo.error = '';
                 newUserInfo.success = true;
                 setUser(newUserInfo);
                })
                .catch((error) => {
                const  newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
             });
             }
        
             event.preventDefault();
          }
    return (
      <div style={{ backgroundImage:`url(${header})`}}  className="header">
        <div className="login">
        <h1 className="mt-5 text-white mb-3">Create Account</h1>
             {
                user.isSignedIn && <div>
                <p>Welcome,{user.name}</p>
                <p>Your email: {user.email}</p>
               </div>
             }
            
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
             <label htmlFor ="newUser" className="text-white mb-3">New User Sign Up</label>
            <form onSubmit={handleSubmit}>
            <div class="form-group">
            <label for="exampleInputEmail1" className="text-white">Email address</label>
            <input className="form-control input" type="email" onBlur={handleBlur} name="email" placeholder="Your Email address" required/>
            </div>
            <br/>
            <div class="form-group">
            <label for="exampleInputPassword1" className="text-white">Password</label>
            <input className="form-control input" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            </div>
            <input className="btn btn-success" type="submit" value="Submit"/>
            <br/>
            <div class="form-group">
              <label for="exampleInputEmail1" className="text-white">already have an account?</label>
            {
                 user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> :
                 <button className="btn btn-success ms-2" onClick={handleGoogleSignIn} >Sign in</button>
               }
               </div>
                </form>
            <div className="btn-lg">
            <button  className="form-control input btn btn-success" onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
            <p style={{color:'red'}}>{user.error}</p>
            {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
        </div>
    );
};

export default Login;