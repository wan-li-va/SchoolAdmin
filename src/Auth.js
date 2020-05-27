import withFirebaseAuth from 'react-with-firebase-auth'
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import App from './App.js'
import { render } from '@testing-library/react';

// trying to follow auth instructions from 
// https://medium.com/firebase-developers/how-to-setup-firebase-authentication-with-react-in-5-minutes-maybe-10-bb8bb53e8834


function Auth() {
    const firebaseApp = Firebase.initializeApp(firebaseConfig);
    const firebaseAppAuth = firebaseApp.auth();
    const providers = {
        googleProvider: new firebase.auth.GoogleAuthProvider(),
    };

    export default withFirebaseAuth({
        providers,
        firebaseAppAuth,
    })(App);

    // render() {
    const {
        user,
        signOut,
        signInWithGoogle,
    } = this.props;

    return (
        {
            this.props.user
                ? <App />
                : <p>Please sign in.</p>
        }
        {
        user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
    }
  )
}