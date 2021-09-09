import React from 'react';

const Textarea = ({
    title = 'Order notes (optional)',
    placeholder = 'Notes about your order, e.g. special notes for delivery',
}) => {
    return (
        <div className="input-field">
            <div className="input-field__label">{title}</div>
            <div className="input-field__inputs-set">
                <textarea type="text" className="input-field__input textarea" placeholder={placeholder} />
            </div>
        </div>
    )
};

export default Textarea;