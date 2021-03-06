import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css';


function Login() {

    const [{}, dispatch ] = useStateValue();

    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type: actionType.SET_USER,
                user: result.user
            })
        })
        .catch((error) =>{
            alert(error.message);
        })
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="img"/>
                <h1>Sign in to Slack clone </h1>
                <Button onClick={signIn}>Sign In with google</Button>
            </div>
            
        </div>
    )
}

export default Login
