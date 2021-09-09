
import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({
    label,
}) => {
    return (
        <div className="pop-up">
            <button className="close-btn"></button>
            <img src="" alt="pop-up" />
            <div className="pop-up__title"></div>
            <div className="pop-up__description"></div>
        </div>
    )
};

PopUp.propTypes = {
    label: PropTypes.string,
};

PopUp.defaultProps = {
    label: '',
};

export default PopUp;