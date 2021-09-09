import React from 'react';

const InputFieldSet = ({
    fieldSet,
}) => {
    return (
        <div className="input-field">
            <div className="input-field__label">{fieldSet.title}</div>
            <div className="input-field__inputs-set">
                {fieldSet.fields.map(({id, placeholder}) => (
                    <input key={id} type="text" className="input-field__input" placeholder={placeholder} />
                ))}
            </div>
        </div>
    )
};

export default InputFieldSet;