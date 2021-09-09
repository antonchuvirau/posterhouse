import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import arrowDownSmall from '../../../assets/icons/arrow-bottom-small.png';
import canada from '../../../assets/icons/Canada.png';

const selectOptions = {
    title: 'Country / Region*',
    id: 'Paper',
    selected: {
        label: canada,
        id: '0',
    },
    options: [
        {
            label: '1” (standard for all prints) **',
            id: '1” (standard for all prints) **',
        },
        {
            label: '2” (additional cost)',
            id: '2” (additional cost)',
        },
        {
            label: '3” (additional cost)',
            id: '3” (additional cost)',
        },
        {
            label: '4” (additional cost)',
            id: '4” (additional cost)',
        },
    ],
};


const PhoneCustomInput = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        id = '',
        title = null,
        selected = {},
        options = [],
    } = selectOptions || {};

    const handleClickOutside = useCallback((event) => {
        if (event.target.matches(`.click-outside-handler${id}`)) {
            return;
        }

        setIsOpen(false);
    }, []);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside])

    return (
        <div className="dropdown-input-field">
            {title && <div className="dropdown-input-field__title">{title}</div>}
            <div className="phone-custom-input">
                <button
                    onClick={() => setIsOpen((prevState) => !prevState)}
                    className={`dropdown-input-field__btn click-outside-handler${id} phone-custom-input__dropdown-button`}
                >
                    <div className={`dropdown-input-field__btn-selected click-outside-handler${id} phone-custom-input__btn-selected`}>
                        <img src={selected.label} alt="country" />
                    </div>
                    <div className={`click-outside-handler${id}`}>
                        <img src={arrowDownSmall} alt="arrow-bottom" />
                    </div>
                </button>
                <div className={`dropdown-input-field__content phone-custom-input__dropdown-content ${isOpen ? 'dropdown-input-field__content--state_visible' : 'dropdown-input-field__content--state_invisible'}`}>
                    <div className="dropdown-input-field__options">
                        {
                            options.map((option) => (
                                <div
                                    key={option.id}
                                    className={`dropdown-input-field__option ${false ? 'dropdown-input-field__option--state_selected' : ''}`}
                                    onClick={() => {
                                        // handleOptionClick(option)
                                    }}
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
                </div>
                <input type="text" className="input-field__input" placeholder="(+1)" />
            </div>
        </div>
)};

export default PhoneCustomInput;
