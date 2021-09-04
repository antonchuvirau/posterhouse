
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SidePanelContext from '../../../contexts/SidePanelContext';
import FiltersPanel from './FiltersPanel';
import DropDownMenu from '../dropdowns/DropDownMenu';

const ManagePanel = ({
    hideLeftSubPanel,
    sortedItems,
}) => {
    const [isSearchBarShown, setIsSearchBarShown] = useState(false);

    const { showSidePanel } = useContext(SidePanelContext)

    const filterPanelId = useRef(null);

    const onFilterClickHandler = () => {
        filterPanelId.current = showSidePanel({ body: <FiltersPanel />})
    }

    const handleClick = useCallback((event) => {
        if (event.target.matches('.manage-panel__search-field') || event.target.matches('.manage-panel__search-btn')) {
            return;
        }

        setIsSearchBarShown(false);
    }, []);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [handleClick])

    return (
        <div className="manage-panel">
            <div className="manage-panel__buttons-bar">
                {
                    hideLeftSubPanel ? <div /> : <div className="manage-panel__filters">
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
                        <DropDownMenu
                            sortedItems={sortedItems}
                            dropdownBtnLabel="Sort by"
                        />
                    </div>
                    <div
                        className="manage-panel__filter-item"
                        onClick={onFilterClickHandler}
                    >
                        Filter
                    </div>
                    <div
                        className="manage-panel__filter-item manage-panel__search-btn"
                        onClick={() => setIsSearchBarShown((prevState) => !prevState)}
                    >
                        Search
                    </div>
                </div>
            </div>
            <div className="manage-panel__search-bar">
                {isSearchBarShown && <textarea
                    className="manage-panel__search-field"
                    placeholder="Search"
                />}
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