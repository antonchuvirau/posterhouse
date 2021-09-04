
import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

const TagsField = ({
    tagsList,
}) => {
    return (
        <div className="tag-field">
            {
                tagsList.map(({ label, id }) => (
                    <Tag key={id} label={label} />
                ))
            }
        </div>
    )
};

TagsField.propTypes = {
    label: PropTypes.string,
};

TagsField.defaultProps = {
    label: '',
};

export default TagsField;