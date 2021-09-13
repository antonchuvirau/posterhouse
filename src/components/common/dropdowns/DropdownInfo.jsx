import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const DropdownInfo = ({
    title,
    descriptionFields,
    classes,
    buttonClasses,
    id,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = useCallback((event) => {
        if (event.target.matches(`.click-outside-handler-${id}`)) {
            return;
        }

        setIsOpen(false);
    }, [title]);

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside])

    return (
        <div className={`dropdown-info ${classes}`}>
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={`dropdown-info__btn ${buttonClasses} click-outside-handler-${id} ${isOpen ? 'dropdown-info__btn--state_active' : 'dropdown-info__btn--state_inactive'}`}
            >
                <div className={`dropdown-info__btn-content click-outside-handler-${id}`}>
                    <div className={`dropdown-info__btn-title click-outside-handler-${id}`}>
                        {title}
                    </div>
                </div>
                <div className={`click-outside-handler-${id}`}>
                    {isOpen ? '-' : '+'}
                </div>
            </button>
            <div className={`dropdown-info__content ${isOpen ? 'dropdown-info__content--state_visible' : 'dropdown-info__content--state_invisible'}`}>
                <div className="dropdown-info__description">
                    {
                        descriptionFields.map(({ label, id }) => (
                            <div className="dropdown-info__description-item" key={id}>{label}</div>
                        ))
                    }
                </div>
            </div>
        </div>
)};

DropdownInfo.defaultProps = {
    descriptionFields: [],
};
DropdownInfo.propTypes = {
    descriptionFields: PropTypes.array,
};

export default DropdownInfo;
