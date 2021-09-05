import React from 'react';
import instagramIcon from '../../../assets/icons/instagram.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import facebookIcon from '../../../assets/icons/facebook.svg';
import MediaLink from './MediaLink';

const MediaLinks = () => (
    <div className="media-links">
        Share
        <div className="media-links__list">
            <MediaLink link="#" icon={instagramIcon} alt="instagram" />
            <MediaLink link="#" icon={twitterIcon} alt="twitter" />
            <MediaLink link="#" icon={facebookIcon} alt="facebook" />
        </div>
    </div>
);

export default MediaLinks;