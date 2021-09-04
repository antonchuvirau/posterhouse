import React, { useState, useEffect, useCallback } from 'react';
import { getInitialSortedByOptionsState } from './manage-panel/useSortByDropdownStructure';

const DropDownMenu = ({
    dropdownBtnLabel,
    sortedItems,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [sortedByOptionsState, setSortedByOptionsState] = useState(() =>  getInitialSortedByOptionsState(sortedItems))

    const handleClick = useCallback((event) => {
        if (event.target.matches('.dropdown-menu__btn')) {
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
        <div className="dropdown-menu">
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="dropdown-menu__btn"
            >
                {dropdownBtnLabel}
            </button>
            <div
                id="dropdown-menu__content"
                className={`dropdown-menu__content ${isOpen ? 'dropdown-menu__content--state_visible' : 'dropdown-menu__content--state_invisible'}`}
            >
                {
                    sortedByOptionsState.map(({ id, label, selected }) => (
                        <a key={id} className={`dropdown-menu__item ${selected ? 'dropdown-menu__item--state_selected' : '' }`} href="#home">{label}</a>
                    ))
                }
            </div>
        </div>
)};

export default DropDownMenu;
