import React from 'react';
import { AUTHORISATION_PAGES } from '../../pages/AuthorisationPage';

const AuthorisationTabs = ({
    setCurrentAuthorisationPage,
    currentAuthorisationPage,
}) => {
    return (
        <div className="authorisation-tabs">
            <div
                onClick={() => setCurrentAuthorisationPage(AUTHORISATION_PAGES.LOGIN)}
                className={`authorisation-tabs__item ${
                    currentAuthorisationPage === AUTHORISATION_PAGES.LOGIN
                    ? 'authorisation-tabs__item--state_active'
                    : 'authorisation-tabs__item--state_inactive'
                }`}
            >
                <h3 className="authorisation-tabs__label">
                    Log in
                </h3>
            </div>
            <div
                onClick={() => setCurrentAuthorisationPage(AUTHORISATION_PAGES.CREATE_ACCOUNT)}
                className={`authorisation-tabs__item ${
                    currentAuthorisationPage === AUTHORISATION_PAGES.CREATE_ACCOUNT
                    ? 'authorisation-tabs__item--state_active'
                    : 'authorisation-tabs__item--state_inactive'
                }`}
            >
                <h3 className="authorisation-tabs__label">
                    Create an account
                </h3>
            </div>
        </div>
    )
};

export default AuthorisationTabs;