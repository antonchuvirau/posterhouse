
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import SidePanelContext from '../../contexts/SidePanelContext';
import FiltersPanel from './filters-panel/FiltersPanel';
import useComponentVisible from '../../hooks/useComponentVisible';

const ManagePanel = ({
    hideLeftSubPanel,
}) => {
    const { showSidePanel, hideSidePanel } = useContext(SidePanelContext)

    const filterPanelId = useRef(null);

    const onFilterClickHandler = () => {
        filterPanelId.current = showSidePanel({ body: <FiltersPanel />})
    }


    // const { ref, isComponentVisible } = useComponentVisible(true);

    // const DropDown = () => {
    //     return (
    //        <div ref={ref}>
    //           {isComponentVisible && (<p>Dropdown Component</p>)}
    //        </div>
    //     );

    // }



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
                <div className="manage-panel__filter-item" onClick={onFilterClickHandler}>
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