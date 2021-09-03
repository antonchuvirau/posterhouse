import React from 'react';
import ButtonDark from '../common/buttons/ButtonDark';
import CheckBox from '../common/CheckBox';

const Login = () => {
    return (
        <div className="login">
            <div className="authorisation-form">
                <div className="authorisation-field">
                    <div className="authorisation-field__label">E-mail address*</div>
                    <input type="text" className="authorisation-field__input"></input>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">Password*</div>
                    <input type="text" className="authorisation-field__input"></input>
                    <div className="authorisation-field__actions">
                        <CheckBox label="Remember me" />
                        <span className="authorisation-field__action-button">Forgot your password?</span>
                    </div>
                </div>
            </div>
            <div className="authorisation__btn">
                <div className="authorisation__btn-container">
                    <ButtonDark classes="authorisation__btn" buttonLabel="Log in" />
                </div>
            </div>
        </div>
    )
};

export default Login;