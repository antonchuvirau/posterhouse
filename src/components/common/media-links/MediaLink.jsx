import React from 'react';

const MediaLink = ({
    icon,
    link,
    alt,
}) => (
    <a href={link}>
        <div className="media-links__item">
            <img src={icon} alt={alt} />
        </div>
    </a>
);

export default MediaLink;


