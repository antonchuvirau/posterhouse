import React, { useEffect, useCallback, useRef, useState } from 'react';

const DropdownOptionsSelectController = () => {
    const dropdownSelectInfoComponents = useRef(null);
    const dropdownSelectInfoOptions = useRef(null);
    const currentDropdown = useRef(null);
    const btnSymbol = useRef(null);
    const currentDropdownContent = useRef(null);
    const buttonLabel = useRef(null);

    const [isCurrentDropdownOpen, setIsCurrentDropdownOpen] = useState({ isOpen: false});

    useEffect(() => {
        if (!currentDropdownContent.current || !btnSymbol.current) {
            return;
        }

        if (isCurrentDropdownOpen.isOpen) {
            currentDropdownContent.current.classList.add('dropdown-select-info__content--state_visible');
            currentDropdownContent.current.classList.remove('dropdown-select-info__content--state_invisible');
            btnSymbol.current.innerHTML = '-';
            return;
        }

        currentDropdownContent.current.classList.remove('dropdown-select-info__content--state_visible');
        currentDropdownContent.current.classList.add('dropdown-select-info__content--state_invisible');
        btnSymbol.current.innerHTML = '+';
    }, [isCurrentDropdownOpen])

    const handleClickOutside = useCallback((event) => {
        if (event.target.matches(`.click-outside-handler`)) {
            return;
        }

        setIsCurrentDropdownOpen((prevState) => (prevState.isOpen ? { isOpen: false} : prevState));
    }, []);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside])


    const onDropdownSelectInfoClick = useCallback((e) => {
        currentDropdown.current = e.currentTarget;
        btnSymbol.current = e.currentTarget.firstElementChild.lastElementChild;

        currentDropdownContent.current = e.currentTarget.lastElementChild;
        buttonLabel.current = e.currentTarget.firstElementChild.firstElementChild.lastElementChild;

        const plusRegex = /\+/g;
        const isClosed = plusRegex.test(btnSymbol.current.innerText);

        if (isClosed) {
            setIsCurrentDropdownOpen({ isOpen: true })
        } else {
            setIsCurrentDropdownOpen({ isOpen: false })
        }
    }, []);

    const onOptionChoose = useCallback((e) => {
        e.stopPropagation();

        const optionLabel = e.currentTarget.firstElementChild.innerText;
        buttonLabel.current.innerHTML = optionLabel;

        setIsCurrentDropdownOpen({ isOpen: false});
    }, []);

    useEffect(() => {
        dropdownSelectInfoComponents.current = document.getElementsByClassName('dropdown-select-info');
        dropdownSelectInfoOptions.current = document.getElementsByClassName('dropdown-select-info__option');

        for (let i = 0; i < dropdownSelectInfoComponents.current.length; i += 1) {
            dropdownSelectInfoComponents.current[i].addEventListener('click', onDropdownSelectInfoClick);
        }
        for (let i = 0; i < dropdownSelectInfoOptions.current.length; i += 1) {
            dropdownSelectInfoOptions.current[i].addEventListener('click', onOptionChoose);
        }

        return () => {
            for (let i = 0; i < dropdownSelectInfoComponents.current.length; i += 1) {
                dropdownSelectInfoComponents.current[i].removeEventListener('click', onDropdownSelectInfoClick);
            }
            for (let i = 0; i < dropdownSelectInfoOptions.current.length; i += 1) {
                dropdownSelectInfoOptions.current[i].removeEventListener('click', onOptionChoose);
            }
        };
    }, [onDropdownSelectInfoClick, onOptionChoose]);

    return null;
};

export default DropdownOptionsSelectController;
