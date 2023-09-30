import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase_init';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const googleHandleSingIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log("error", error.message)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null)
        })
        .catch(error => {
            console.log('error', error);
        })
    }

    const githubLogin = () => {
        signInWithPopup(auth, gitProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log("error", error.message)
        })
    }
    return (
        <div>
            <br />
            {user && <div>
                <img src={user.photoURL} alt="" />
                <h1>{user.displayName}</h1>
                <h3>{user.email}</h3>
            </div>}
            <br />
            {   user ? 
                <button onClick={handleSignOut}>Sign Out</button> : 
                <>
                    <button onClick={googleHandleSingIn}>Google Login</button> 
                    <button onClick={githubLogin}>Github Login</button>
                </>
            }
        </div>
    );
};

export default Login;