import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="img"/>
                <h1>Sign in to Slack clone </h1>
                <Button className='button'>Sign In with google</Button>
            </div>
            
        </div>
    )
}

export default Login
