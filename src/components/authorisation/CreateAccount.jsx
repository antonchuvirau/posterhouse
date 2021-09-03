import React from 'react';
import ButtonDark from '../common/buttons/ButtonDark';

const CreateAccount = () => {
    return (
        <form className="create-account">
            <div className="authorisation-form">
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        First name*
                    </div>
                    <input type="text" className="authorisation-field__input"></input>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        Last name*
                    </div>
                    <input type="text" className="authorisation-field__input"></input>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        E-mail address*
                    </div>
                    <input type="text" className="authorisation-field__input"></input>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        Password*
                    </div>
                    <input type="text" className="authorisation-field__input"></input>
                </div>
            </div>
            <div className="authorisation__btn-container">
                <ButtonDark classes="authorisation__btn" buttonLabel="Create an account" />
            </div>
        </form>
    )
};

export default CreateAccount;