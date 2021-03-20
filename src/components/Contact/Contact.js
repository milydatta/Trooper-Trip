import React, {useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../components/Login/firebase.config';
import { UserContext } from '../../App';

const Contact = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   

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
        })
        .catch(err =>{
             console.log(err);
            console.log(err.message);
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
    }
   
    return (
        <div style={{textAlign:'center'}}>
             <h1>Create Your New Account</h1>
            <form onSubmit={handleGoogleSignIn}>
            <input className="input" type="text" onBlur={handleBlur} name="email" placeholder="Your Email address" required/>
            <br/>
            <input className="input" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <input className="input" type="password" name="password" onBlur={handleBlur} placeholder="Confirm Your Password" required/>
            <br/>
            <input  type="submit" value="Submit"/>
            </form>
            <div className="btn">
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>

        </div>
    );
};

export default Contact;