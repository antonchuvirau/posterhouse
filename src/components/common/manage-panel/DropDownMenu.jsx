import React, { useState, useEffect, useCallback } from 'react';
import { getInitialSortedByOptionsState } from './useSortByDropdownStructure';

const DropDownMenu = ({
    dropdownBtnLabel,
    sortedItems,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [sortedByOptionsState, setSortedByOptionsState] = useState(() =>  getInitialSortedByOptionsState(sortedItems))

    const handleClick = useCallback((event) => {
        if (event.target.matches('.dropdown__btn')) {
            return;
        }

        setIsOpen(false);
    }, []);


    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [handleClick])

    return (
        <div className="dropdown">
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="dropdown__btn"
            >
                {dropdownBtnLabel}
            </button>
            <div
                id="dropdown__content"
                className={`dropdown__content ${isOpen ? 'dropdown__content--state_visible' : 'dropdown__content--state_invisible'}`}
            >
                {
                    sortedByOptionsState.map(({ id, label, selected }) => (
                        <a key={id} className={`dropdown__item ${selected ? 'dropdown__item--state_selected' : '' }`} href="#home">{label}</a>
                    ))
                }
            </div>
        </div>
)};

export default DropDownMenu;
