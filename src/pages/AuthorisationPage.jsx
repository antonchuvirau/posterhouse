import React from 'react';
import AddressBar from '../components/common/AddressBar';
import Login from '../components/authorisation/Login';
import CreateAccount from '../components/authorisation/CreateAccount';
import AuthorisationTabs from '../components/authorisation/AuthorisationTabs';

const AuthorisationPage = () => {
    return (
        <div className="authorisation">
            <AddressBar address={'Home / Log in'} />
            <section className="authorisation__container">
                <AuthorisationTabs />
                <Login />
                {/* <CreateAccount /> */}
            </section>
        </div>
    )
};

export default AuthorisationPage;