import React from 'react';

type PropsType = {
    address: string,
};

const AddressBar: React.FC<PropsType> = ({
    address,
}) => (
    <div className="address-bar">
        <div className="address-bar__container">
            {address}
        </div>
    </div>
);

export default AddressBar;


