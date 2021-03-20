import React, { useContext, useState } from 'react';
import './Login.css';
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
      
        <div className="login">
               {
                 user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> :
                 <button onClick={handleGoogleSignIn} >Sign in</button>
               }
             {
                user.isSignedIn && <div>
                <p>Welcome,{user.name}</p>
                <p>Your email: {user.email}</p>
               </div>
             }
            <h1>Login with Trooper</h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
             <label htmlFor ="newUser">New User Sign Up</label>
            <form onSubmit={handleSubmit}>
            <input className="input" type="text" onBlur={handleBlur} name="email" placeholder="Your Email address" required/>
            <br/>
            <input className="input" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <input  type="submit" value="Submit"/>
            </form>
            <div className="btn">
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
            <p style={{color:'red'}}>{user.error}</p>
            {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
    );
};

export default Login;