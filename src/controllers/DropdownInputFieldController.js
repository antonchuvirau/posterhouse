import React, { useState, useEffect, useCallback, useRef } from 'react';

const toggleElementsClasses = (element, ...classes) => classes.map((className) => element.classList.toggle(className));

const DropdownInputFieldController = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownInputFields = useRef(null);
    const dropdownBtn = useRef(null);

    const dropdownBtnLabel = useRef(null);
    const dropdownBtnIcon = useRef(null);

    const dropdownContent = useRef(null);
    const backdrop = useRef(null);

    const dropdownOptions = useRef(null);
    const dropdownSearch = useRef(null);

    useEffect(() => {
        if (!dropdownBtn.current || !dropdownBtnIcon.current || !dropdownContent.current || !backdrop.current) {
            return;
        }

        toggleElementsClasses(dropdownBtn.current, 'dropdown-input-field__btn--state_active', 'dropdown-input-field__btn--state_inactive');
        toggleElementsClasses(dropdownBtnIcon.current, 'arrow-up', 'arrow-bottom');

        toggleElementsClasses(dropdownContent.current, 'dropdown-input-field__content--state_visible', 'dropdown-input-field__content--state_invisible');
        toggleElementsClasses(backdrop.current, 'dropdown-input-field__backdrop--state-invisible')
    }, [isOpen])

    const onBackdropClick = useCallback((e) => {
        e.stopPropagation();
        setIsOpen(false);
    }, []);

    const initialiseDropdownElements = useCallback((e) => {
        dropdownBtn.current = null;
        dropdownBtnLabel.current = null;
        dropdownBtnIcon.current = null;
        dropdownContent.current = null;
        backdrop.current = null;
        dropdownOptions.current = null;
        dropdownSearch.current = null;

        dropdownBtn.current = e.currentTarget
            ?.querySelector('.dropdown-input-field__btn');

        dropdownBtnLabel.current = dropdownBtn.current
            ?.querySelector('.dropdown-input-field__btn-label');

        dropdownBtnIcon.current = dropdownBtn.current
            ?.querySelector('.dropdown-input-field__btn-icon');

        dropdownContent.current = e.currentTarget
            ?.querySelector('.dropdown-input-field__content');

        backdrop.current = e.currentTarget
            ?.querySelector('.dropdown-input-field__backdrop');

        dropdownOptions.current = dropdownContent.current
            ?.querySelectorAll('.dropdown-input-field__option');

        dropdownSearch.current = dropdownContent.current
            ?.querySelector('.dropdown-input-field__search-field');
    }, []);

    const onDropdownOptionClick = useCallback((e) => {
        e.stopPropagation();

        const label = e.currentTarget
            .querySelector('.dropdown-input-field__option-label')
            .innerHTML
            .trim();

        dropdownBtnLabel.current.innerHTML = label;
        dropdownSearch.current.value = '';

        setIsOpen(false);
    }, []);

    const onSearch = useCallback((e) => {
        const searchValue = e.currentTarget.value.toLowerCase();

        for (let dropdownOption of dropdownOptions.current) {
            const label = dropdownOption
                .querySelector('.dropdown-input-field__option-label')
                .innerHTML
                .toLowerCase();

            if (label.includes(searchValue)) {
                dropdownOption.classList.remove('dropdown-input-field__option--state_invisible');
            } else {
                dropdownOption.classList.add('dropdown-input-field__option--state_invisible');
            }
        }
    }, []);

    const onSearchClick = useCallback((e) => {
        e.stopPropagation();
    }, []);

    const addEventListenersOnElements = useCallback(() => {
        if (backdrop.current) {
            backdrop.current.addEventListener('click', onBackdropClick);
        }

        if (dropdownOptions.current) {
            dropdownOptions.current.forEach((element) => element.addEventListener('click', onDropdownOptionClick));
        }

        if (dropdownSearch.current) {
            dropdownSearch.current.addEventListener('input', onSearch);
            dropdownSearch.current.addEventListener('click', onSearchClick);
        }
    }, [
        onSearchClick,
        onBackdropClick,
        onDropdownOptionClick,
        onSearch,
    ]);

    const onDropdownInputFieldClick = useCallback((e) => {
        e.stopPropagation();
        initialiseDropdownElements(e);
        addEventListenersOnElements();
        setIsOpen((prevState) => (prevState ? prevState : true));
    }, [
        addEventListenersOnElements,
        initialiseDropdownElements,
    ])

    useEffect(() => {
        dropdownInputFields.current = document.getElementsByClassName('dropdown-input-field');

        if (!dropdownInputFields.current) {
            return;
        }

        for (let dropdownInputField of dropdownInputFields.current) {
            dropdownInputField.addEventListener('click', onDropdownInputFieldClick);
        }

        return () => {
            for (let dropdownInputField of dropdownInputFields.current) {
                dropdownInputField.removeEventListener('click', onDropdownInputFieldClick);
            }
        }
    }, [onDropdownInputFieldClick])

    return null;
};

export default DropdownInputFieldController;
