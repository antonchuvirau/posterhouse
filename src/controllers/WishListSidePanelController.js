
import React, { useCallback, useEffect, useRef, useState } from 'react';

const WishListSidePanelController = () => {
    const [isWishSidePanelOpen, setIsWishSidePanelOpen] = useState(false);

    const closeBtn = useRef(null);
    const continueShoppingBtn = useRef(null);
    const openWishListSidePanelBtn = useRef(null);
    const backDropComponent = useRef(null);
    const wishListSidePanel = useRef(null);

    const toggleWishSidePanelVisibility = useCallback(() => {
        if (!wishListSidePanel.current || !backDropComponent.current) {
            return;
        }

        wishListSidePanel.current.classList.toggle('wish-list-side-panel--state_invisible');
        backDropComponent.current.classList.toggle('wish-list-side-panel__backdrop--state-invisible');
    }, [])

    const onWishSidePanelClose = useCallback((e) => {
        e.stopPropagation();
        setIsWishSidePanelOpen(false);
    }, []);

    const onWishSidePanelOpen = useCallback(() => {
        setIsWishSidePanelOpen(true);
    }, []);

    useEffect(() => {
        toggleWishSidePanelVisibility();
    }, [isWishSidePanelOpen, toggleWishSidePanelVisibility])


    useEffect(() => {
        closeBtn.current = document.getElementById('wish-list-side-panel__close-btn');
        continueShoppingBtn.current = document.getElementById('wish-list-side-panel__continue-shopping-btn');
        openWishListSidePanelBtn.current = document.getElementById('open-wish-list-side-panel');
        backDropComponent.current = document.getElementById('wish-list-side-panel__backdrop');
        wishListSidePanel.current = document.getElementById('wish-list-side-panel');

        if (closeBtn.current) {
            closeBtn.current.addEventListener('click', onWishSidePanelClose);
        }

        if (continueShoppingBtn.current) {
            continueShoppingBtn.current.addEventListener('click', onWishSidePanelClose);
        }

        if (openWishListSidePanelBtn.current) {
            openWishListSidePanelBtn.current.addEventListener('click', onWishSidePanelOpen);
        }

        if (backDropComponent.current) {
            backDropComponent.current.addEventListener('click', onWishSidePanelClose);
        }

        return () => {
            closeBtn.current.removeEventListener('click', onWishSidePanelClose);
            continueShoppingBtn.current.removeEventListener('click', onWishSidePanelClose);
            openWishListSidePanelBtn.current.removeEventListener('click', onWishSidePanelOpen);
            backDropComponent.current.removeEventListener('click', onWishSidePanelClose);
        };
    }, [onWishSidePanelClose, onWishSidePanelOpen]);

    return null;
};

export default WishListSidePanelController;