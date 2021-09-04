
import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({
    label,
}) => {
    return (
        <div className="tag">
            <div className="tag__content">
                {label}
            </div>
        </div>
    )
};

Tag.propTypes = {
    label: PropTypes.string,
};

Tag.defaultProps = {
    label: '',
};

export default Tag;