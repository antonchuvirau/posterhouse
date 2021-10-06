import { useState, useEffect, useCallback, useRef } from 'react';
import { useFilterSearchOptionController } from '../hooks/useFilterSearchOptionController';

const DropdownInputFieldController = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownInputFields = useRef(null);
    const dropdownBtn = useRef(null);

    const dropdownBtnLabel = useRef(null);
    const dropdownBtnIcon = useRef(null);

    const dropdownContent = useRef(null);
    const backdrop = useRef(null);

    const input = useRef(null);

    const dropdownOptions = useRef(null);
    const dropdownSearch = useRef(null);

    const { clearAllSearchBars } = useFilterSearchOptionController();

    const openDropDrownInput = useCallback(() => {
        dropdownBtn.current.classList.add('dropdown-input-field__btn--state_active')
        dropdownBtn.current.classList.remove('dropdown-input-field__btn--state_inactive')

        dropdownBtnIcon.current.classList.add('arrow-up')
        dropdownBtnIcon.current.classList.remove('arrow-bottom')

        dropdownContent.current.classList.add('dropdown-input-field__content--state_visible')
        dropdownContent.current.classList.remove('dropdown-input-field__content--state_invisible')

        backdrop.current.classList.remove('backdrop--state_invisible')
    }, []);

    const closeDropDrownInput = useCallback(() => {
        dropdownBtn.current.classList.add('dropdown-input-field__btn--state_inactive')
        dropdownBtn.current.classList.remove('dropdown-input-field__btn--state_active')

        dropdownBtnIcon.current.classList.add('arrow-bottom')
        dropdownBtnIcon.current.classList.remove('arrow-up')

        dropdownContent.current.classList.add('dropdown-input-field__content--state_invisible')
        dropdownContent.current.classList.remove('dropdown-input-field__content--state_visible')

        backdrop.current.classList.add('backdrop--state_invisible')
    }, []);

    useEffect(() => {
        clearAllSearchBars();

        if (!dropdownBtn.current || !dropdownBtnIcon.current || !dropdownContent.current || !backdrop.current) {
            return;
        }

        if (isOpen) {
            openDropDrownInput();

            return;
        }

        closeDropDrownInput();
    }, [
        isOpen,
        clearAllSearchBars,
        openDropDrownInput,
        closeDropDrownInput,
    ])

    const onBackdropClick = useCallback((e) => {
        e.stopPropagation();
        setIsOpen(false);
    }, []);

    const initialiseDropdownElements = useCallback((e) => {
        dropdownBtn.current = null;
        dropdownBtnLabel.current = null;
        dropdownBtnIcon.current = null;
        dropdownContent.current = null;
        input.current = null;
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

        input.current = e.currentTarget
            ?.querySelector('.dropdown-input-field__content__input')

        backdrop.current = e.currentTarget
            ?.querySelector('.backdrop');

        dropdownOptions.current = dropdownContent.current
            ?.querySelectorAll('.dropdown-input-field__option');

        dropdownSearch.current = dropdownContent.current
            ?.querySelector('.dropdown-input-field__search-field');
    }, []);

    const onDropdownOptionClick = useCallback((e) => {
        e.stopPropagation();

        const label = e.currentTarget
            .querySelector('.dropdown-input-field__label-to-replace')
            .innerHTML
            .trim();

        dropdownBtnLabel.current.innerHTML = label;

        const dialingCode = e.currentTarget
            .querySelector('.dialing-code')
            ?.innerHTML
            ?.trim();

        if (dialingCode) {
            input.current.placeholder = dialingCode;
        }

        if (dropdownSearch.current) {
            dropdownSearch.current.value = '';
        }

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

        if (e.target.classList.contains('input-field__input')) {
            return;
        }

        setIsOpen((prevState) => (prevState ? prevState : true));
    }, [
        addEventListenersOnElements,
        initialiseDropdownElements,
    ])

    useEffect(() => {
        dropdownInputFields.current = document.getElementsByClassName('dropdown-input-field__container');

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

            if (backdrop.current) {
                backdrop.current.removeEventListener('click', onBackdropClick);
            }

            if (dropdownOptions.current) {
                dropdownOptions.current.forEach((element) => element.removeEventListener('click', onDropdownOptionClick));
            }

            if (dropdownSearch.current) {
                dropdownSearch.current.removeEventListener('input', onSearch);
                dropdownSearch.current.removeEventListener('click', onSearchClick);
            }

        }
    }, [
        onDropdownInputFieldClick,
        onBackdropClick,
        onSearchClick,
        onSearch,
        onDropdownOptionClick,
    ])

    return null;
};

export default DropdownInputFieldController;
