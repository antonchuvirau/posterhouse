import React from 'react';

type PropsType = {
    icon: string,
    link: string,
    alt: string,
};

const MediaLink: React.FC<PropsType> = ({
    icon,
    link,
    alt,
}) => (
    <a href={link}>
        <div className="media-link">
            <img src={icon} alt={alt} />
        </div>
    </a>
);

export default MediaLink;


