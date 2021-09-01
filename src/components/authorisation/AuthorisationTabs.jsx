import React from 'react';

const AuthorisationTabs = () => {
    return (
        <div className="authorisation-tabs">
            <div className="authorisation-tabs__item authorisation-tabs__item--state_active">
                <h3 className="authorisation-tabs__label authorisation-tabs__label--state_active">
                    Log in
                </h3>
            </div>
            <div className="authorisation-tabs__item authorisation-tabs__item--state_inactive">
                <h3 className="authorisation-tabs__label authorisation-tabs__label--state_inactive">
                    Create an account
                </h3>
            </div>
        </div>
    )
};

export default AuthorisationTabs;