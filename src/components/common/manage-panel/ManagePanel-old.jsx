
import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from '../dropdowns/DropDownMenu';

const ManagePanel = ({
    hideLeftSubPanel,
    sortedItems,
}) => {
    const [isSearchBarShown, setIsSearchBarShown] = useState(false);
    const [isFilterPanelShown, setIsFilterPanelShown] = useState(false);

    const filtersPanelComponent = useRef(null);
    const backDropComponent = useRef(null);

    const onFiltersPanelOpen = useCallback(() => {
        setIsFilterPanelShown(true);
    }, []);

    const onBackdropClick = useCallback(() => {
        setIsFilterPanelShown(false)
    }, []);

    const handleClickOutsideSearchField = useCallback((event) => {
        if (event.target.matches('.manage-panel__search-field') || event.target.matches('.manage-panel__search-btn')) {
            return;
        }

        setIsSearchBarShown(false);
    }, []);

    const toggleFiltersPanelVisibility = useCallback(() => {
        if (isFilterPanelShown) {
            filtersPanelComponent.current.classList.remove('side-panel--state_invisible');
            backDropComponent.current.classList.remove('side-panel__backdrop--state_invisible');
            return;
        }
        filtersPanelComponent.current.classList.add('side-panel--state_invisible');
        backDropComponent.current.classList.add('side-panel__backdrop--state_invisible');
    }, [isFilterPanelShown])

    useEffect(() => {
        if (!filtersPanelComponent.current) {
            return;
        }

        toggleFiltersPanelVisibility();
    }, [isFilterPanelShown, toggleFiltersPanelVisibility])

    useEffect(() => {
        filtersPanelComponent.current = document.getElementById('side-panel');
        backDropComponent.current = document.getElementById('side-panel__backdrop');

        backDropComponent.current.addEventListener('click', onBackdropClick)
        window.addEventListener("click", handleClickOutsideSearchField);

        return () => {
            window.removeEventListener("click", handleClickOutsideSearchField);
            backDropComponent.current.removeEventListener("click", onBackdropClick);
        };
    }, [handleClickOutsideSearchField, onBackdropClick])

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
                        className={`manage-panel__filter-item ${isFilterPanelShown ? 'manage-panel__filter-item--state_active' : ''}`}
                        onClick={onFiltersPanelOpen}
                    >
                        Filter
                    </div>
                    <div
                        className={`manage-panel__filter-item manage-panel__search-btn ${isSearchBarShown ? 'manage-panel__filter-item--state_active' : ''}`}
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