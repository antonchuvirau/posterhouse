import React from 'react';

const CardList = ({
    cardComponents,
}) => {
    return (
        <div className="card-list" >
            <div className="card-list__cards">
                {cardComponents}
            </div>
        </div>
    )
};

export default CardList;