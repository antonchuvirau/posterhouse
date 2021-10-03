
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../inputs/CheckBox';

const Filter = ({
    filterStructure,
}) => {
    const {
        title = '',
        textarea = false,
        checkBoxes = [],
        delimiter = false,
        useScroll = false,
    } = filterStructure || {};

    if (delimiter) {
        return <hr className="filter__delimiter" />
    }

    return (
        <div className="filter">
            <div htmlFor="" className="filter__title">
                {title}
            </div>
            {textarea && <input type="text" className="filter__search-field" placeholder="Search" />}
            <div className={`filter__content ${useScroll ? 'filter__content--scroll' : ''}`}>
                {
                    checkBoxes.map(({ label, checked, id }) => (
                        <CheckBox
                            key={id}
                            labelClasses="filter__label"
                            inputClasses="filter__checkbox"
                            label={label}
                            checked={checked}
                        />
                        // <label key={id} className="filter__label custom-checkbox">
                        //     <input type="checkbox" className="filter__checkbox custom-checkbox__input" />
                        //     <span className="custom-checkbox__label">{label}</span>
                        // </label>
                    ))
                }
            </div>
        </div>
    )
};

Filter.propTypes = {
};

Filter.defaultProps = {
};

export default Filter;