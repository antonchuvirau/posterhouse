
import React, { useCallback, useEffect, useRef, useState } from 'react';

const PaperTypesModalController = () => {
    // const [isModalOpened, setIsModalOpened] = useState(false);

    // const openBtn = useRef(null);
    // const closeBtn = useRef(null);

    // const onModalClose = useCallback((e) => {
    //     e.stopPropagation();
    //     setIsModalOpened(false);
    // }, []);

    // const onModalOpen = useCallback(() => {
    //     setIsModalOpened(true);
    // }, []);

    // // paper-types-modal-btn
    // const continueShoppingBtn = useRef(null);
    // const openWishListSidePanelBtn = useRef(null);
    // const backDropComponent = useRef(null);
    // const wishListSidePanel = useRef(null);

    // const toggleWishSidePanelVisibility = useCallback(() => {
    //     if (!wishListSidePanel.current || !backDropComponent.current) {
    //         return;
    //     }

    //     wishListSidePanel.current.classList.toggle('wish-list-side-panel--state_invisible');
    //     backDropComponent.current.classList.toggle('wish-list-side-panel__backdrop--state-invisible');
    // }, [])


    // useEffect(() => {
    //     toggleWishSidePanelVisibility();
    // }, [isWishSidePanelOpen, toggleWishSidePanelVisibility])



    // useEffect(() => {
    //     openBtn.current = document.getElementById('paper-types-modal-btn');
    //     closeBtn.current = document.getElementById('paper-types-modal__close-btn');

    //     if (openBtn.current) {
    //         openBtn.current.addEventListener('click', onModalOpen);
    //     }

    //     if (closeBtn.current) {
    //         closeBtn.current.addEventListener('click', onModalClose);
    //     }






    //     continueShoppingBtn.current = document.getElementById('wish-list-side-panel__continue-shopping-btn');
    //     openWishListSidePanelBtn.current = document.getElementById('open-wish-list-side-panel');
    //     backDropComponent.current = document.getElementById('wish-list-side-panel__backdrop');
    //     wishListSidePanel.current = document.getElementById('wish-list-side-panel');

    //     if (closeBtn.current) {
    //         closeBtn.current.addEventListener('click', onWishSidePanelClose);
    //     }

    //     if (continueShoppingBtn.current) {
    //         continueShoppingBtn.current.addEventListener('click', onWishSidePanelClose);
    //     }

    //     if (openWishListSidePanelBtn.current) {
    //         openWishListSidePanelBtn.current.addEventListener('click', onWishSidePanelOpen);
    //     }

    //     if (backDropComponent.current) {
    //         backDropComponent.current.addEventListener('click', onWishSidePanelClose);
    //     }

    //     return () => {
    //         closeBtn.current.removeEventListener('click', onWishSidePanelClose);
    //         continueShoppingBtn.current.removeEventListener('click', onWishSidePanelClose);
    //         openWishListSidePanelBtn.current.removeEventListener('click', onWishSidePanelOpen);
    //         backDropComponent.current.removeEventListener('click', onWishSidePanelClose);
    //     };
    // }, [onWishSidePanelClose, onWishSidePanelOpen]);

    return null;
};

export default PaperTypesModalController;