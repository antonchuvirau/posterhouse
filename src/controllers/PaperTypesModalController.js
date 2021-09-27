
import React, { useCallback, useEffect, useRef, useState } from 'react';

const PaperTypesModalController = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openBtn = useRef(null);
    const closeBtn = useRef(null);
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

        modal.current.classList.toggle('paper-types-modal--state-invisible');
        backDrop.current.classList.toggle('paper-types-modal__backdrop--state-invisible');
    }, [])


    useEffect(() => {
        toggleModalVisibility();
    }, [isModalOpened, toggleModalVisibility])



    useEffect(() => {
        openBtn.current = document.getElementById('paper-types-modal-btn');
        closeBtn.current = document.getElementById('paper-types-modal__close-btn');
        backDrop.current = document.getElementById('paper-types-modal__backdrop');
        modal.current = document.getElementById('paper-types-modal');

        if (openBtn.current) {
            openBtn.current.addEventListener('click', onModalOpen);
        }

        if (closeBtn.current) {
            closeBtn.current.addEventListener('click', onModalClose);
        }

        if (backDrop.current) {
            backDrop.current.addEventListener('click', onModalClose);
        }

        return () => {
            if (closeBtn.current) {
                closeBtn.current.removeEventListener('click', onModalClose);
            }

            if (openBtn.current) {
                openBtn.current.removeEventListener('click', onModalOpen);
            }

            if (backDrop.current) {
                backDrop.current.removeEventListener('click', onModalClose);
            }
        };
    }, [
        onModalClose,
        onModalOpen,
    ]);

    return <div />;
};

export default PaperTypesModalController;