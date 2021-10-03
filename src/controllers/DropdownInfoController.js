import React, { useState, useEffect, useCallback } from 'react';
import { useRef } from 'react';

const DropdownInfoController = () => {
    const [isOpen, setIsOpen] = useState({ value: false });

    const dropDownInfoComponents = useRef(null);
    const dropdown = useRef(null);
    const dropdownSymbol = useRef(null);
    const dropdownContent = useRef(null);
    const dropdownBtn = useRef(null);

    const onDropdownInfoClick = useCallback((e) => {
        dropdown.current = e.currentTarget;
        dropdownSymbol.current = e.currentTarget.firstElementChild.lastElementChild;

        dropdownBtn.current = e.currentTarget.firstElementChild;
        dropdownContent.current = e.currentTarget.lastElementChild;

        const plusRegex = /\+/g;
        const isClosed = plusRegex.test(dropdownSymbol.current.innerText);

        if (isClosed) {
            setIsOpen({ value: true })
        } else {
            setIsOpen({ value: false })
        }
    }, []);

    const handleClickOutside = useCallback((event) => {
        if (event.target.matches(`.click-outside-handler`)) {
            return;
        }

        setIsOpen((prevState) => (prevState.value ? { value: false} : prevState));
    }, []);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside])

    useEffect(() => {
        if (!dropdownContent.current || !dropdownSymbol.current || !dropdownBtn.current) {
            return;
        }

        dropdownContent.current.classList.toggle('dropdown-info__content--state_visible');
        dropdownContent.current.classList.toggle('dropdown-info__content--state_invisible');

        dropdownBtn.current.classList.toggle('dropdown-info__btn--state_active');
        dropdownBtn.current.classList.toggle('dropdown-info__btn--state_inactive');

        if (isOpen.value) {
            dropdownSymbol.current.innerHTML = '-';
        } else {
            dropdownSymbol.current.innerHTML = '+';
        }
    }, [isOpen])

    useEffect(() => {
        dropDownInfoComponents.current = document.getElementsByClassName('dropdown-info');

        if (!dropDownInfoComponents.current) {
            return;
        }

        for (let i = 0; i < dropDownInfoComponents.current.length; i += 1) {
            dropDownInfoComponents.current[i].addEventListener('click', onDropdownInfoClick);
        }

        return () => {
            for (let i = 0; i < dropDownInfoComponents.current.length; i += 1) {
                dropDownInfoComponents.current[i].removeEventListener('click', onDropdownInfoClick);
            }
        };
    }, [onDropdownInfoClick]);

    return null;
};

export default DropdownInfoController;
