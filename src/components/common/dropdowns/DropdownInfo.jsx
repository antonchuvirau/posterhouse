import React, { useState, useEffect, useCallback } from 'react';

const DropdownInfo = ({
    title,
    description,
    classes,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = useCallback((event) => {
        if (event.target.matches(`.click-outside-handler-${title}`)) {
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
                className={`dropdown-info__btn click-outside-handler-${title} ${isOpen ? 'dropdown-info__btn--state_active' : 'dropdown-info__btn--state_inactive'}`}
            >
                <div className={`dropdown-info__btn-content click-outside-handler-${title}`}>
                    <div className={`dropdown-info__btn-title click-outside-handler-${title}`}>
                        {title}
                    </div>
                </div>
                <div className={`click-outside-handler-${title}`}>
                    {isOpen ? '-' : '+'}
                </div>
            </button>
            <div className={`dropdown-info__content ${isOpen ? 'dropdown-info__content--state_visible' : 'dropdown-info__content--state_invisible'}`}>
                {
                    description && <div className="dropdown-info__description">
                        {description}
                    </div>
                }
            </div>
        </div>
)};

export default DropdownInfo;
