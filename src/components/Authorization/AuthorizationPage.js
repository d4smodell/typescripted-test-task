import React from 'react'
import LoginForm from './AuthForm'
import './AuthorizationPage.css'
import emblem from "../Images/emblem_tyumen.png"

const AuthorizationPage = props => {
    return <div className="authorization">
        <LoginForm />
        <div className={'Preview'}>
        <div><img src={emblem} alt=""/></div>
        <div >
            <h1>Информационная система “Коечный фонд - бронирование”</h1>
            <p>Департамент информатизации Тюменской области</p>
        </div>
        </div>
    </div>
}

export default AuthorizationPage