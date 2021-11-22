import { useCallback, useEffect, useRef } from 'react';

const INPUT_TYPES = {
    PASS: 'password',
    TEXT: 'text',
};

const ShowHiddenValueBtnController = () => {
    const showHiddenBtns = useRef();

    const toggleVisibility = useCallback((e) => {
        e.stopPropagation();

        const showHiddenBtn = e.currentTarget;
        const passField = showHiddenBtn.previousElementSibling;

        if (!passField) {
            return;
        }

        switch (passField.type) {
            case INPUT_TYPES.PASS:
                passField.type = INPUT_TYPES.TEXT;
                return;

            case INPUT_TYPES.TEXT:
                passField.type = INPUT_TYPES.PASS;
                return;

            default:
                return;
        }
    }, [])

    useEffect(() => {
        showHiddenBtns.current = document.getElementsByClassName('show-hidden-value-btn');

        if (showHiddenBtns.current) {
            for (let i = 0; i < showHiddenBtns.current.length; i += 1) {
                showHiddenBtns.current[i].addEventListener('click', toggleVisibility);
            }
        }

        return () => {
            if (showHiddenBtns.current) {
                for (let i = 0; i < showHiddenBtns.current.length; i += 1) {
                    showHiddenBtns.current[i].removeEventListener('click', toggleVisibility,
                    { capture: true}
                    );
                }
            }
        };
    }, [toggleVisibility]);

    return null;
};

export default ShowHiddenValueBtnController;