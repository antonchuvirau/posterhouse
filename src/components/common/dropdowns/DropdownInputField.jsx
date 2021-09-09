import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import arrowBottom from '../../../assets/icons/arrow-bottom.png';

const DropdownInputField = ({
    selectOptions,
    selectActionType,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const {
        id = '',
        title = null,
        selected = {},
        options = [],
        description = null,
    } = selectOptions || {};

    const handleClickOutside = useCallback((event) => {
        if (event.target.matches(`.click-outside-handler${id}`)) {
            return;
        }

        setIsOpen(false);
    }, []);

    const handleOptionClick = useCallback((selected) => {
        dispatch({ type: selectActionType, selected });
    }, [dispatch, selectActionType]);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside])

    return (
        <div className="dropdown-input-field">
            {title && <div className="dropdown-input-field__title">{title}</div>}
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`dropdown-input-field__btn click-outside-handler${id}`}
            >
                <div className={`dropdown-input-field__btn-selected click-outside-handler${id}`}>
                    {selected.label}
                </div>
                <div className={`click-outside-handler${id}`}>
                    <img src={arrowBottom} alt="arrow-bottom" />
                </div>
            </button>
            <div className={`dropdown-input-field__content ${isOpen ? 'dropdown-input-field__content--state_visible' : 'dropdown-input-field__content--state_invisible'}`}>
                <div className="dropdown-input-field__options">
                    {
                        options.map((option) => (
                            <div
                                key={option.id}
                                className={`dropdown-input-field__option ${false ? 'dropdown-input-field__option--state_selected' : '' }`}
                                onClick={() => handleOptionClick(option)}
                            >
                                <div className="dropdown-input-field__option-label">
                                    {option.label}
                                </div>
                                {
                                    option.image && <img src={option.image} alt="option" />
                                }
                            </div>
                        ))
                    }
                </div>
                {
                    description && <div className="dropdown-input-field__description">
                        {description}
                    </div>
                }
            </div>
        </div>
)};

export default DropdownInputField;
