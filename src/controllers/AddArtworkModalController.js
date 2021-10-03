
import { useCallback, useEffect, useRef, useState } from 'react';

const AddArtworkModalController = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openBtn = useRef(null);
    const closeBtn = useRef(null);
    const submitBtn = useRef(null);
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
            modal.current.classList.remove('add-artwork-modal--state-invisible');
            backDrop.current.classList.remove('backdrop--state_invisible');
            return;
        }

        modal.current.classList.add('add-artwork-modal--state-invisible');
        backDrop.current.classList.add('backdrop--state_invisible');
    }, [isModalOpened])

    useEffect(() => {
        toggleModalVisibility();
    }, [isModalOpened, toggleModalVisibility])

    useEffect(() => {
        openBtn.current = document.getElementById('add-artwork-modal__open-btn');
        closeBtn.current = document.getElementById('add-artwork-modal__close-btn');
        submitBtn.current = document.getElementById('add-artwork-modal__submit-btn');
        backDrop.current = document.getElementById('add-artwork-modal__backdrop');
        modal.current = document.getElementById('add-artwork-modal');

        if (openBtn.current) {
            openBtn.current.addEventListener('click', onModalOpen);
        }

        if (closeBtn.current) {
            closeBtn.current.addEventListener('click', onModalClose);
        }

        if (submitBtn.current) {
            submitBtn.current.addEventListener('click', onModalClose);
        }

        if (backDrop.current) {
            backDrop.current.addEventListener('click', onModalClose);
        }

        return () => {
            if (closeBtn.current) {
                closeBtn.current.removeEventListener('click', onModalClose);
            }

            if (submitBtn.current) {
                submitBtn.current.removeEventListener('click', onModalClose);
            }

            if (openBtn.current) {
                openBtn.current.removeEventListener('click', onModalOpen);
            }

            if (backDrop.current) {
                backDrop.current.removeEventListener('click', onModalClose);
            }
        };
    }, [onModalClose, onModalOpen]);

    return null;
};

export default AddArtworkModalController;