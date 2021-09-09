
import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
    label,
    labelClasses,
    inputClasses,
    checked,
}) => {

    return (
        <label className={`${labelClasses} custom-checkbox`}>
            <input type="checkbox" className={`${inputClasses} custom-checkbox__input`} />
            <span className="custom-checkbox__label">{label}</span>
        </label>
    )
};

CheckBox.propTypes = {
    labelClasses: PropTypes.string,
    inputClasses: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
};

CheckBox.defaultProps = {
    labelClasses: '',
    inputClasses: '',
    label: '',
};

export default CheckBox;