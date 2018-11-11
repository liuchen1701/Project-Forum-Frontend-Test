import React, {Component} from 'react';
import firebase from "../firebase";

class LoginDialog extends Component {

    /**
     * Handles the sign in button press.
     */
    toggleSignIn() {
        if (firebase.auth().currentUser) {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
        } else {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            if (email.length < 4) {
                alert('Please enter an email address.');
                return;
            }
            if (password.length < 4) {
                alert('Please enter a password.');
                return;
            }
            // Sign in with email and pass.
            // [START authwithemail]
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                // document.getElementById('sign-in').disabled = false;
                // [END_EXCLUDE]
            });
            // [END authwithemail]
        }
        // document.getElementById('sign-in').disabled = true;
    }

    /**
     * Handles the sign up button press.
     */
    handleSignUp() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END createwithemail]
    }

    render() {
        return (
            <div>
                <input id="email" type="text" placeholder="Email"/>
                <input id="password" type="password" placeholder="Password"/>
                <button id="log-in" onClick={this.toggleSignIn}>Log in</button>
                <button id="sign up" onClick={this.handleSignUp}>Sign up</button>
            </div>
        );
    }
}

export default LoginDialog;