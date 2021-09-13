
import React from 'react';
import PropTypes from 'prop-types';
import close from '../../assets/icons/close.svg';

const PopUp = ({
}) => {
    // <div className="pop-up">
        //     <button className="close-btn"></button>
        //     <img src="" alt="pop-up" />
        //     <div className="pop-up__title"></div>
        //     <div className="pop-up__description"></div>
        // </div>

    return (
        <>
            <div class="popup-wrapper">
                <input type="checkbox" class="popup-checkbox" id="popupCheckboxOne" />
                <div class="popup">
                    <div class="popup-content">
                        <label for="popupCheckboxOne" class="popup-closer">
                            <img src={close} alt="close" />
                        </label>
                        Popup text
                    </div>
                </div>
            </div>
            <label for="popupCheckboxOne" class="popup-shower">Show Popup</label>
        </>





    )
};

PopUp.propTypes = {
    label: PropTypes.string,
};

PopUp.defaultProps = {
    label: '',
};

export default PopUp;