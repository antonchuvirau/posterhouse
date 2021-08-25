
import React from 'react';

type PropsType = {};

const ManagePanel: React.FC<PropsType> = () => {
    return (
        <div className="manage-panel">
            <div className="manage-panel__filters">
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

export default ManagePanel;