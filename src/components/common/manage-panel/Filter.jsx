
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';

const Filter = ({
    hideLeftSubPanel,
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
            {textarea && <input type="text" className="filter__textarea" placeholder="Search" />}
            <div className={`filter__content ${useScroll ? 'filter__content--scroll' : ''}`}>
                {
                    checkBoxes.map(({ label, checked, id }) => (
                        <label key={id} className="filter__label custom-checkbox">
                            <input type="checkbox" className="filter__checkbox custom-checkbox__input" />
                            <span className="custom-checkbox__label">{label}</span>
                        </label>
                    ))
                }
            </div>
        </div>
    )
};

Filter.propTypes = {
    hideLeftSubPanel: PropTypes.bool,
};

Filter.defaultProps = {
    hideLeftSubPanel: false,
};

export default Filter;