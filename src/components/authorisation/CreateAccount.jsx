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
                    <textarea className="authorisation-field__input"></textarea>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        Last name*
                    </div>
                    <textarea className="authorisation-field__input"></textarea>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        E-mail address*
                    </div>
                    <textarea className="authorisation-field__input"></textarea>
                </div>
                <div className="authorisation-field">
                    <div className="authorisation-field__label">
                        Password*
                    </div>
                    <textarea className="authorisation-field__input"></textarea>
                </div>
            </div>
            <div className="authorisation__btn-container">
                <ButtonDark classes="authorisation__btn" buttonLabel="Create an account" />
            </div>
        </form>
    )
};

export default CreateAccount;