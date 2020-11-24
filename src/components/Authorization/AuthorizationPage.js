import React from 'react'
import LoginForm from './AuthForm'
import './AuthorizationPage.css'
import { Preview } from './Preview'

const AuthorizationPage = props => {
    return <div className="authorization">
        <LoginForm setIsEntered={props.setIsEntered}/>
        <Preview />
    </div>
}

export default AuthorizationPage