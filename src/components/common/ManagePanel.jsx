
import React from 'react';
import PropTypes from 'prop-types';

const ManagePanel = ({
    hideLeftSubPanel,
}) => {
    return (
        <div className="manage-panel">
            {
                hideLeftSubPanel ? <div/> : <div className="manage-panel__filters">
                    <div className="manage-panel__filter-item manage-panel__filter-item--state_active">
                        All
                    </div>
                    <div className="manage-panel__filter-item">
                        Artwork
                    </div>
                    <div className="manage-panel__filter-item">
                        Print
                    </div>
                </div>
            }
            <div className="manage-panel__filters">
                <div className="manage-panel__filter-item">
                    Sort by
                </div>
                <div className="manage-panel__filter-item">
                    Filter
                </div>
                <div className="manage-panel__filter-item">
                    Search
                </div>
            </div>
        </div>
    )
};

ManagePanel.propTypes = {
    hideLeftSubPanel: PropTypes.bool,
};

ManagePanel.defaultProps = {
    hideLeftSubPanel: false,
};

export default ManagePanel;