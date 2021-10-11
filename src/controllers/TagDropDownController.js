
import { useCallback, useEffect, useRef, useState } from 'react';

const ORDER_STATUSES = {
    CANCELLED: 'Cancelled',
    FINISHED: 'Finished',
    NEW: 'New',
    RETURNED: 'Returned',
};

const TagDropDownController = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [orderStatus, setOrderStatus] = useState(ORDER_STATUSES.NEW);

    const dropdowns = useRef(null);
    const dropdownBtn = useRef(null);
    const dropdownBtnTag = useRef(null);
    const dropdownBtnIcon = useRef(null);

    const dropdownBtnLabel = useRef(null);
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


    const addClassForTag = (className) => {
        if (!dropdownBtnTag.current) {
            return;
        }

        dropdownBtnTag.current.classList.add(className);
    }

    const addClassForArrow = (className) => {
        if (!dropdownBtnIcon.current) {
            return;
        }

        dropdownBtnIcon.current.classList.add(className);
    }

    const removeColorClassesFromTag = useCallback(() => {
        if (!dropdownBtnTag.current || !dropdownBtnIcon.current) {
            return;
        }

        dropdownBtnTag.current.className = "";
        dropdownBtnIcon.current.className = "";
    }, []);


    const changeOrderStatusView = useCallback(() => {
        if (!dropdownBtnTag.current || !dropdownBtnIcon.current || !dropdownBtnLabel.current) {
            return;
        }

        dropdownBtnLabel.current.innerHTML = orderStatus;

        switch (orderStatus) {
            case ORDER_STATUSES.CANCELLED:
                removeColorClassesFromTag();
                ['tag', 'tag--pink'].forEach(addClassForTag);
                ['tag__arrow', 'tag__arrow--pink'].forEach(addClassForArrow);
                return;

            case ORDER_STATUSES.FINISHED:
                removeColorClassesFromTag();
                ['tag', 'tag--blue'].forEach(addClassForTag);
                ['tag__arrow', 'tag__arrow--blue'].forEach(addClassForArrow);
                return;

            case ORDER_STATUSES.RETURNED:
                removeColorClassesFromTag();
                ['tag', 'tag--yellow'].forEach(addClassForTag);
                ['tag__arrow', 'tag__arrow--yellow'].forEach(addClassForArrow);
                return;

            case ORDER_STATUSES.NEW:
                removeColorClassesFromTag();
                ['tag', 'tag--green'].forEach(addClassForTag);
                ['tag__arrow', 'tag__arrow--green'].forEach(addClassForArrow);
                return;

            default:
                return;
        }
    }, [orderStatus, removeColorClassesFromTag]);

    useEffect(() => {
        toggleDropdownContentVisibility();
    }, [isOpen, toggleDropdownContentVisibility])

    useEffect(() => {
        changeOrderStatusView();
    }, [orderStatus, changeOrderStatusView])

    const changeDropdownMenuItemState = useCallback((element) => {
        if (!dropdownOptions.current) {
            return;
        }

        for (let i = 0; i < dropdownOptions.current.length; i += 1) {
            dropdownOptions.current[i].classList.remove('tag-dropdown-menu__item--state_selected');
        }

        element.classList.add('tag-dropdown-menu__item--state_selected');
    }, []);

    const onDropdownOptionClick = useCallback((e) => {
        e.stopPropagation();
        const label = e.currentTarget.innerHTML.trim();

        changeDropdownMenuItemState(e.currentTarget)
        setOrderStatus(label)
        setIsOpen(false);
    }, [changeDropdownMenuItemState]);

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

        dropdownBtnTag.current = null;
        dropdownContent.current = null;

        backdrop.current = null;
        dropdownOptions.current = null;
        dropdownBtnIcon.current = null;

        dropdownBtn.current = e.currentTarget?.querySelector('.tag-dropdown-menu__btn');
        dropdownBtnLabel.current = dropdownBtn.current?.querySelector('.tag__content');

        dropdownBtnIcon.current = dropdownBtn.current?.querySelector('.tag__arrow');
        dropdownBtnTag.current = dropdownBtn.current?.querySelector('.tag');

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