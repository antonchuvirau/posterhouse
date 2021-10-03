
import { useCallback, useEffect, useRef, useState } from 'react';

const StatusModalController = () => {
    const [isModalOpened, setIsModalOpened] = useState(true);

    const closeBtns = useRef(null);
    const backDrops = useRef(null);
    const modals = useRef(null);
    const cancelBtns = useRef(null);

    const onModalClose = useCallback((e) => {
        e.stopPropagation();
        setIsModalOpened(false);
    }, []);

    const toggleModalVisibility = useCallback(() => {
        if (!modals.current || !backDrops.current) {
            return;
        }

        if (isModalOpened) {
            for (let i = 0; i < modals.current.length; i += 1) {
                modals.current[i].classList.add('status-modal--state-visible');
                modals.current[i].classList.remove('status-modal--state-invisible');
            }

            for (let i = 0; i < backDrops.current.length; i += 1) {
                backDrops.current[i].classList.remove('backdrop--state_invisible');
            }

            return;
        }

        for (let i = 0; i < modals.current.length; i += 1) {
            modals.current[i].classList.remove('status-modal--state-visible');
            modals.current[i].classList.add('status-modal--state-invisible');
        }

        for (let i = 0; i < backDrops.current.length; i += 1) {
            backDrops.current[i].classList.add('backdrop--state_invisible');
        }
    }, [isModalOpened])

    useEffect(() => {
        toggleModalVisibility();
    }, [isModalOpened, toggleModalVisibility])

    useEffect(() => {
        closeBtns.current = document.getElementsByClassName('status-modal__close-btn');
        backDrops.current = document.getElementsByClassName('backdrop');
        modals.current = document.getElementsByClassName('status-modal');
        cancelBtns.current = document.getElementsByClassName('status-modal__cancel-btn');

        if (!closeBtns.current || !backDrops.current) {
            return;
        }

        for (let i = 0; i < closeBtns.current.length; i += 1) {
            closeBtns.current[i].addEventListener('click', onModalClose);
        }
        for (let i = 0; i < backDrops.current.length; i += 1) {
            backDrops.current[i].addEventListener('click', onModalClose);
        }

        if (cancelBtns.current) {
            for (let i = 0; i < cancelBtns.current.length; i += 1) {
                cancelBtns.current[i].addEventListener('click', onModalClose);
            }
        }

        return () => {
            for (let i = 0; i < closeBtns.current.length; i += 1) {
                closeBtns.current[i].removeEventListener('click', onModalClose);
            }
            for (let i = 0; i < backDrops.current.length; i += 1) {
                backDrops.current[i].removeEventListener('click', onModalClose);
            }

            if (cancelBtns.current) {
                for (let i = 0; i < cancelBtns.current.length; i += 1) {
                    cancelBtns.current[i].addEventListener('click', onModalClose);
                }
            }
        };
    }, [onModalClose]);

    return null;
};

export default StatusModalController;