// import React, { useState, useEffect, useCallback, useRef } from 'react';

import { useCallback, useEffect, useRef, useState } from "react";

// const toggleElementsClasses = (element, ...classes) => classes.map((className) => element.classList.toggle(className));

const PhoneCustomInputController = () => {
    const [flags, setFlags] = useState(null);
    const [dialsCodes, setDialsCodes] = useState(null);

    const dialingCodeOptions = useRef(null);

    // const [isOpen, setIsOpen] = useState(false);

    // const dropdownInputFields = useRef(null);
    // const dropdownBtn = useRef(null);

    // const dropdownBtnLabel = useRef(null);
    // const dropdownBtnIcon = useRef(null);

    // const dropdownContent = useRef(null);
    // const backdrop = useRef(null);

    // const input = useRef(null);

    // const dropdownOptions = useRef(null);
    // const dropdownSearch = useRef(null);

    // useEffect(() => {
    //     if (!dropdownBtn.current || !dropdownBtnIcon.current || !dropdownContent.current || !backdrop.current) {
    //         return;
    //     }

    //     toggleElementsClasses(dropdownBtn.current, 'dropdown-input-field__btn--state_active', 'dropdown-input-field__btn--state_inactive');
    //     toggleElementsClasses(dropdownBtnIcon.current, 'arrow-up', 'arrow-bottom');

    //     toggleElementsClasses(dropdownContent.current, 'dropdown-input-field__content--state_visible', 'dropdown-input-field__content--state_invisible');
    //     toggleElementsClasses(backdrop.current, 'dropdown-input-field__backdrop--state-invisible')
    // }, [isOpen])

    // const onBackdropClick = useCallback((e) => {
    //     e.stopPropagation();
    //     setIsOpen(false);
    // }, []);

    // const initialiseDropdownElements = useCallback((e) => {
    //     dropdownBtn.current = null;
    //     dropdownBtnLabel.current = null;
    //     dropdownBtnIcon.current = null;
    //     dropdownContent.current = null;
    //     input.current = null;
    //     backdrop.current = null;
    //     dropdownOptions.current = null;
    //     dropdownSearch.current = null;

    //     dropdownBtn.current = e.currentTarget
    //         ?.querySelector('.dropdown-input-field__btn');

    //     dropdownBtnLabel.current = dropdownBtn.current
    //         ?.querySelector('.dropdown-input-field__btn-label');

    //     dropdownBtnIcon.current = dropdownBtn.current
    //         ?.querySelector('.dropdown-input-field__btn-icon');

    //     dropdownContent.current = e.currentTarget
    //         ?.querySelector('.dropdown-input-field__content');

    //     input.current = e.currentTarget
    //         ?.querySelector('.dropdown-input-field__content__input')

    //     backdrop.current = e.currentTarget
    //         ?.querySelector('.dropdown-input-field__backdrop');

    //     dropdownOptions.current = dropdownContent.current
    //         ?.querySelectorAll('.dropdown-input-field__option');

    //     dropdownSearch.current = dropdownContent.current
    //         ?.querySelector('.dropdown-input-field__search-field');
    // }, []);

    // const onDropdownOptionClick = useCallback((e) => {
    //     e.stopPropagation();

    //     const label = e.currentTarget
    //         .querySelector('.dropdown-input-field__label-to-replace')
    //         .innerHTML
    //         .trim();

    //     dropdownBtnLabel.current.innerHTML = label;

    //     const dialingCode = e.currentTarget
    //         .querySelector('.dialing-code')
    //         ?.innerHTML
    //         ?.trim();

    //     if (dialingCode) {
    //         input.current.placeholder = dialingCode;
    //     }

    //     if (dropdownSearch.current) {
    //         dropdownSearch.current.value = '';
    //     }

    //     setIsOpen(false);
    // }, []);

    // const onSearch = useCallback((e) => {
    //     const searchValue = e.currentTarget.value.toLowerCase();

    //     for (let dropdownOption of dropdownOptions.current) {
    //         const label = dropdownOption
    //             .querySelector('.dropdown-input-field__option-label')
    //             .innerHTML
    //             .toLowerCase();

    //         if (label.includes(searchValue)) {
    //             dropdownOption.classList.remove('dropdown-input-field__option--state_invisible');
    //         } else {
    //             dropdownOption.classList.add('dropdown-input-field__option--state_invisible');
    //         }
    //     }
    // }, []);

    // const onSearchClick = useCallback((e) => {
    //     e.stopPropagation();
    // }, []);

    // const addEventListenersOnElements = useCallback(() => {
    //     if (backdrop.current) {
    //         backdrop.current.addEventListener('click', onBackdropClick);
    //     }

    //     if (dropdownOptions.current) {
    //         dropdownOptions.current.forEach((element) => element.addEventListener('click', onDropdownOptionClick));
    //     }

    //     if (dropdownSearch.current) {
    //         dropdownSearch.current.addEventListener('input', onSearch);
    //         dropdownSearch.current.addEventListener('click', onSearchClick);
    //     }
    // }, [
    //     onSearchClick,
    //     onBackdropClick,
    //     onDropdownOptionClick,
    //     onSearch,
    // ]);

    // const onDropdownInputFieldClick = useCallback((e) => {
    //     e.stopPropagation();
    //     initialiseDropdownElements(e);
    //     addEventListenersOnElements();

    //     if (e.target.classList.contains('input-field__input')) {
    //         return;
    //     }

    //     setIsOpen((prevState) => (prevState ? prevState : true));
    // }, [
    //     addEventListenersOnElements,
    //     initialiseDropdownElements,
    // ])

    // useEffect(() => {
    //     dropdownInputFields.current = document.getElementsByClassName('dropdown-input-field__container');

    //     if (!dropdownInputFields.current) {
    //         return;
    //     }

    //     for (let dropdownInputField of dropdownInputFields.current) {
    //         dropdownInputField.addEventListener('click', onDropdownInputFieldClick);
    //     }

    //     return () => {
    //         for (let dropdownInputField of dropdownInputFields.current) {
    //             dropdownInputField.removeEventListener('click', onDropdownInputFieldClick);
    //         }
    //     }
    // }, [onDropdownInputFieldClick])

    useEffect(() => {
        if (!flags || !dialsCodes) {
            return;
        }




        <div class="dropdown-input-field__options">

            <div class="dropdown-input-field__option">
                <div class="dropdown-input-field__label-to-replace">
                    <img src="./assets/icons/Canada.png" alt="flag" />
                </div>
                <div class="dropdown-input-field__option-label">
                    Canada
                </div>
                <div class="dialing-code">(+1)</div>
            </div>

            <div class="dropdown-input-field__option">
                <div class="dropdown-input-field__label-to-replace">
                    <img src="" alt="flag" />
                </div>
                <div class="dropdown-input-field__option-label">
                    Belarus
                </div>
                <div class="dialing-code">(+2)</div>
            </div>

            <div class="dropdown-input-field__option">
                <div class="dropdown-input-field__label-to-replace">
                    <img src="" alt="flag" />
                </div>
                <div class="dropdown-input-field__option-label">
                    Canada
                </div>
                <div class="dialing-code">(+3)</div>
            </div>
        </div>



    }, [flags, dialsCodes])

    const getData = useCallback(async () => {
        try {
            const flagsDataPromise = fetch('https://countriesnow.space/api/v0.1/countries/flag/unicode')
                .then((res) => res.json());

            const dialsCodesPromise = fetch('https://countriesnow.space/api/v0.1/countries/codes')
                .then((res) => res.json());

            const [
                flags,
                dialsCodes,
            ] = await Promise.all([
                flagsDataPromise,
                dialsCodesPromise,
            ]);

            setFlags(flags.data)
            setDialsCodes(dialsCodes.data);
        } catch (error) {
            console.error(error.message)
        }
    }, []);

    useEffect(() => {
        dialingCodeOptions.current = document.getElementById('dialing-code-options');
        getData();
    }, [getData]);

    return null;
};

export default PhoneCustomInputController;
