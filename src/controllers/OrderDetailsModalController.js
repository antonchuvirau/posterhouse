
import { useCallback, useEffect, useRef, useState } from 'react';

const OrderDetailsModalController = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openBtns = useRef(null);
    const closeBtns = useRef(null);
    const backDrop = useRef(null);
    const modal = useRef(null);

    const onModalClose = useCallback((e) => {
        e.stopPropagation();
        setIsModalOpened(false);
    }, []);

    const onModalOpen = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const toggleModalVisibility = useCallback(() => {
        if (!modal.current || !backDrop.current) {
            return;
        }

        if (isModalOpened) {
            modal.current.classList.remove('order-details-modal--state-invisible');
            backDrop.current.classList.remove('backdrop--state_invisible');
            return;
        }

        modal.current.classList.add('order-details-modal--state-invisible');
        backDrop.current.classList.add('backdrop--state_invisible');
    }, [isModalOpened])

    useEffect(() => {
        toggleModalVisibility();
    }, [isModalOpened, toggleModalVisibility])

    useEffect(() => {
        openBtns.current = document.getElementsByClassName('order-details-modal-btn');
        closeBtns.current = document.getElementsByClassName('order-details-modal-close');

        backDrop.current = document.getElementById('order-details-modal__backdrop');
        modal.current = document.getElementById('order-details-modal');

        if (openBtns.current) {
            for (let i = 0; i < openBtns.current.length; i += 1) {
                openBtns.current[i].addEventListener('click', onModalOpen);
            }
        }

        if (closeBtns.current) {
            for (let i = 0; i < closeBtns.current.length; i += 1) {
                closeBtns.current[i].addEventListener('click', onModalClose);
            }
        }

        if (backDrop.current) {
            backDrop.current.addEventListener('click', onModalClose);
        }

        return () => {
            if (closeBtns.current) {
                for (let i = 0; i < closeBtns.current.length; i += 1) {
                    closeBtns.current[i].removeEventListener('click', onModalClose);
                }
            }

            if (openBtns.current) {
                for (let i = 0; i < openBtns.current.length; i++) {
                    openBtns.current[i].removeEventListener('click', onModalOpen);
                }
            }

            if (backDrop.current) {
                backDrop.current.removeEventListener('click', onModalClose);
            }
        };
    }, [onModalClose, onModalOpen]);

    return null;
};

export default OrderDetailsModalController;