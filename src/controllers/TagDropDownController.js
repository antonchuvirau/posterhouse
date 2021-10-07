
import { useCallback, useEffect, useRef, useState } from 'react';

const ORDER_STATUSES = {
    CANCELLED: 'Cancelled',
    FINISHED: 'Finished',
    NEW: 'New',
    RETURNED: 'Returned',
};

const TagDropDownController = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdowns = useRef(null);
    const dropdownBtn = useRef(null);
    const dropdownBtnLabel = useRef(null);
    // const dropdownBtnIcon = useRef(null);
    const dropdownContent = useRef(null);
    const backdrop = useRef(null);
    const dropdownOptions = useRef(null);

    const toggleDropdownContentVisibility = useCallback(() => {
        if (!dropdownContent.current) {
            return
        }

        if (isOpen) {
            dropdownContent.current.classList.remove('tag-dropdown-menu__content--state_invisible');
            dropdownContent.current.classList.add('tag-dropdown-menu__content--state_visible');
            backdrop.current.classList.remove('backdrop--state_invisible')
            return;
        }

        dropdownContent.current.classList.remove('tag-dropdown-menu__content--state_visible');
        dropdownContent.current.classList.add('tag-dropdown-menu__content--state_invisible');
        backdrop.current.classList.add('backdrop--state_invisible')
    }, [isOpen]);

    useEffect(() => {
        toggleDropdownContentVisibility();
    }, [isOpen, toggleDropdownContentVisibility])


    const onDropdownOptionClick = useCallback((e) => {
        e.stopPropagation();

        const label = e.currentTarget.innerHTML.trim();
        dropdownBtnLabel.current.innerHTML = label;

        setIsOpen(false);
    }, []);

    const onBackdropClick = useCallback((e) => {
        e.stopPropagation();
        setIsOpen(false);
    }, []);

    const removeEventListeners = useCallback(() => {
        if (backdrop.current) {
            backdrop.current.removeEventListener('click', onBackdropClick);
        }

        if (dropdownOptions.current) {
            dropdownOptions.current.forEach((element) => element.removeEventListener('click', onDropdownOptionClick));
        }
    }, [
        onBackdropClick,
        onDropdownOptionClick,
    ]);

    const initialiseDropdownElements = useCallback((e) => {
        dropdownBtn.current = null;
        dropdownBtnLabel.current = null;
        // dropdownBtnIcon.current = null;
        dropdownContent.current = null;
        backdrop.current = null;
        dropdownOptions.current = null;

        dropdownBtn.current = e.currentTarget?.querySelector('.tag-dropdown-menu__btn');
        dropdownBtnLabel.current = dropdownBtn.current?.querySelector('.tag__content');
        // dropdownBtnIcon.current = dropdownBtn.current?.querySelector('.tag__arrow');
        dropdownContent.current = e.currentTarget?.querySelector('.tag-dropdown-menu__content');
        backdrop.current = e.currentTarget?.querySelector('.backdrop');
        dropdownOptions.current = dropdownContent.current?.querySelectorAll('.tag-dropdown-menu__item');
    }, [])

    const addEventListenersOnElements = useCallback(() => {
        if (backdrop.current) {
            backdrop.current.addEventListener('click', onBackdropClick);
        }

        if (dropdownOptions.current) {
            dropdownOptions.current.forEach((element) => element.addEventListener('click', onDropdownOptionClick));
        }
    }, [
        onBackdropClick,
        onDropdownOptionClick,
    ]);

    const onDropdownClick = useCallback((e) => {
        e.stopPropagation();


        removeEventListeners();
        initialiseDropdownElements(e);
        addEventListenersOnElements();

        setIsOpen((prevState) => (prevState ? prevState : true));
    }, [
        removeEventListeners,
        setIsOpen,
        initialiseDropdownElements,
        addEventListenersOnElements,
    ]);

    useEffect(() => {
        dropdowns.current = document.getElementsByClassName('tag-dropdown-menu');

        if (!dropdowns.current) {
            return;
        }

        for (let dropdown of dropdowns.current) {
            dropdown.addEventListener('click', onDropdownClick);
        }

        return () => {
            for (let dropdown of dropdowns.current) {
                dropdown.removeEventListener('click', onDropdownClick);
            }
        }
    }, [onDropdownClick]);

    return null;
};

export default TagDropDownController;