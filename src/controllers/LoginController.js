
import { useCallback, useEffect, useRef, useState } from 'react';

const PAGES = {
    LOGIN: 'login',
    CREATE_ACCOUNT: 'create an account',
    FORGOT_PASSWORD: 'Forgot your password',
    NEW_PASSWORD: 'enter a new password below',
};

const LoginController = () => {
    const [currentPage, setCurrentPage] = useState(PAGES.LOGIN);

    const loginComponents = useRef(null);
    const forgotPasswordComponents = useRef(null);

    const enterNewPasswordComponents = useRef(null);
    const createAccountComponents = useRef(null);

    const forgotPasswordBtn = useRef(null);
    const loginBtns = useRef(null);
    const createAccountBtns = useRef(null);

    const goToForgotPasswordPage = useCallback(() => {
        setCurrentPage(PAGES.FORGOT_PASSWORD);
    }, []);

    const goToLoginPage = useCallback(() => {
        setCurrentPage(PAGES.LOGIN);
    }, []);

    const goToCreateAccountPage = useCallback(() => {
        setCurrentPage(PAGES.CREATE_ACCOUNT);
    }, []);

    const openCreateAccountPage = useCallback(() => {
        if(loginComponents.current) {
            for (let i = 0; i < loginComponents.current.length; i += 1) {
                loginComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }

        if(forgotPasswordComponents.current) {
            for (let i = 0; i < forgotPasswordComponents.current.length; i += 1) {
                forgotPasswordComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }

        if(enterNewPasswordComponents.current) {
            for (let i = 0; i < enterNewPasswordComponents.current.length; i += 1) {
                enterNewPasswordComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }
        if(createAccountComponents.current) {
            for (let i = 0; i < createAccountComponents.current.length; i += 1) {
                createAccountComponents.current[i].classList.remove('authorisation-component--invisible');
            }
        }
    }, []);

    const openLoginPage = useCallback(() => {
        if(loginComponents.current) {
            for (let i = 0; i < loginComponents.current.length; i += 1) {
                loginComponents.current[i].classList.remove('authorisation-component--invisible');
            }
        }

        if(forgotPasswordComponents.current) {
            for (let i = 0; i < forgotPasswordComponents.current.length; i += 1) {
                forgotPasswordComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }

        if(enterNewPasswordComponents.current) {
            for (let i = 0; i < enterNewPasswordComponents.current.length; i += 1) {
                enterNewPasswordComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }
        if(createAccountComponents.current) {
            for (let i = 0; i < createAccountComponents.current.length; i += 1) {
                createAccountComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }
    }, []);

    const openForgotPasswordPage = useCallback(() => {
        if(loginComponents.current) {
            for (let i = 0; i < loginComponents.current.length; i += 1) {
                loginComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }

        if(forgotPasswordComponents.current) {
            for (let i = 0; i < forgotPasswordComponents.current.length; i += 1) {
                forgotPasswordComponents.current[i].classList.remove('authorisation-component--invisible');
            }
        }

        if(enterNewPasswordComponents.current) {
            for (let i = 0; i < enterNewPasswordComponents.current.length; i += 1) {
                enterNewPasswordComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }
        if(createAccountComponents.current) {
            for (let i = 0; i < createAccountComponents.current.length; i += 1) {
                createAccountComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }
    }, []);

    const openNewPasswordPage = useCallback(() => {
        if(loginComponents.current) {
            for (let i = 0; i < loginComponents.current.length; i += 1) {
                loginComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }

        if(forgotPasswordComponents.current) {
            for (let i = 0; i < forgotPasswordComponents.current.length; i += 1) {
                forgotPasswordComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }

        if(enterNewPasswordComponents.current) {
            for (let i = 0; i < enterNewPasswordComponents.current.length; i += 1) {
                enterNewPasswordComponents.current[i].classList.remove('authorisation-component--invisible');
            }
        }
        if(createAccountComponents.current) {
            for (let i = 0; i < createAccountComponents.current.length; i += 1) {
                createAccountComponents.current[i].classList.add('authorisation-component--invisible');
            }
        }
    }, []);


    useEffect(() => {
        switch (currentPage) {
            case PAGES.CREATE_ACCOUNT:
                openCreateAccountPage()
                return;
            case PAGES.NEW_PASSWORD:
                openNewPasswordPage()
                return;
            case PAGES.FORGOT_PASSWORD:
                openForgotPasswordPage()
                return;
            default:
                openLoginPage()
                return;
        }
    }, [
        currentPage,
        openCreateAccountPage,
        openNewPasswordPage,
        openForgotPasswordPage,
        openLoginPage,
    ])

    useEffect(() => {
        forgotPasswordBtn.current = document.getElementById('authorisation-field__forgot-password-btn');
        loginBtns.current = document.getElementsByClassName('authorisation-tabs__login');
        createAccountBtns.current = document.getElementsByClassName('authorisation-tabs__create-account');

        loginComponents.current = document.getElementsByClassName('login-component');
        forgotPasswordComponents.current = document.getElementsByClassName('forgot-password-component');

        enterNewPasswordComponents.current = document.getElementsByClassName('enter-new-password');
        createAccountComponents.current = document.getElementsByClassName('create-account-component');

        if (forgotPasswordBtn.current) {
            forgotPasswordBtn.current.addEventListener('click', goToForgotPasswordPage);
        }

        if (loginBtns.current) {
            for (let i = 0; i < loginBtns.current.length; i += 1) {
                loginBtns.current[i].addEventListener('click', goToLoginPage);
            }
        }

        if (createAccountBtns.current) {
            for (let i = 0; i < createAccountBtns.current.length; i += 1) {
                createAccountBtns.current[i].addEventListener('click', goToCreateAccountPage);
            }
        }

        return () => {
            if (forgotPasswordBtn.current) {
                forgotPasswordBtn.current.removeEventListener('click', goToForgotPasswordPage);
            }

            if (loginBtns.current) {
                for (let i = 0; i < loginBtns.current.length; i += 1) {
                    loginBtns.current[i].removeEventListener('click', goToLoginPage);
                }
            }

            if (createAccountBtns.current) {
                for (let i = 0; i < createAccountBtns.current.length; i += 1) {
                    createAccountBtns.current[i].removeEventListener('click', goToCreateAccountPage);
                }
            }

        }
    }, [goToForgotPasswordPage, goToLoginPage, goToCreateAccountPage])

    return null;
};

export default LoginController;