import React, { useState } from 'react';
import AddressBar from '../components/common/AddressBar';
import Login from '../components/authorisation/Login';
import CreateAccount from '../components/authorisation/CreateAccount';
import AuthorisationTabs from '../components/authorisation/AuthorisationTabs';

export const AUTHORISATION_PAGES = {
    LOGIN: 'LOGIN',
    CREATE_ACCOUNT: 'CREATE_ACCOUNT',
};

const AuthorisationPage = () => {
    const [currentAuthorisationPage, setCurrentAuthorisationPage] = useState(AUTHORISATION_PAGES.LOGIN);

    return (
        <div className="authorisation">
            <AddressBar address={'Home / Log in'} />
            <section className="authorisation__container">
                <AuthorisationTabs
                    setCurrentAuthorisationPage={setCurrentAuthorisationPage}
                    currentAuthorisationPage={currentAuthorisationPage}
                />
                {currentAuthorisationPage === AUTHORISATION_PAGES.LOGIN && <Login />}
                {currentAuthorisationPage === AUTHORISATION_PAGES.CREATE_ACCOUNT && <CreateAccount />}
            </section>
        </div>
    )
};

export default AuthorisationPage;