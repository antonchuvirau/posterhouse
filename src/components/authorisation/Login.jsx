import React from 'react';
import ButtonDark from '../common/buttons/ButtonDark';

const Login = () => {
    return (
        <div className="login">
            <div className="authorisation-form">
                <div className="authorisation-field">
                    <div className="authorisation-field__label">E-mail address*</div>
                    <textarea className="authorisation-field__input"></textarea>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">Password*</div>
                    <textarea className="authorisation-field__input"></textarea>
                    <div className="authorisation-field__actions"></div>
                </div>
            </div>
            <div className="authorisation__btn"></div>
            <div className="authorisation__btn-container">
                <ButtonDark classes="authorisation__btn" buttonLabel="Log in" />
            </div>
        </div>
    )
};

export default Login;