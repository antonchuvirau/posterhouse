import { useCallback, useEffect, useRef } from 'react';

const ReadMoreBtnController = () => {
    const readMoreBtn = useRef(null);
    const text = useRef(null);
    const blurComponent = useRef(null);

    const showAllText = useCallback(() => {
        blurComponent.current.classList.add('artist-page-biography__content-blur--invisible');
        text.current.classList.remove('artist-page-biography__content--limited-height');
    }, []);

    useEffect(() => {
        text.current = document.querySelector('.artist-page-biography__content');
        blurComponent.current = document.querySelector('.artist-page-biography__content-blur');
        readMoreBtn.current = document.getElementById('artist-page-biography__content-read-more-btn');

        const textHeight = text.current.offsetHeight;

        if (textHeight < 140) {
            blurComponent.current.classList.add('artist-page-biography__content-blur--invisible');
        } else {
            blurComponent.current.classList.remove('artist-page-biography__content-blur--invisible');
        }

        if (readMoreBtn.current) {
            readMoreBtn.current.addEventListener('click', showAllText);
        }

        return () => {
            if (readMoreBtn.current) {
                readMoreBtn.current.removeEventListener('click', showAllText);
            }
        }
    }, [showAllText]);

    return null;
};

export default ReadMoreBtnController;