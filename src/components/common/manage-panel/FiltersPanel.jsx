
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import SidePanelContext from '../../../contexts/SidePanelContext';
import { useFiltersListStructure } from './useFiltersListStructure';
import Filter from './Filter';

const FiltersPanel = ({
    hideLeftSubPanel,
}) => {
    const { filtersListStructure } = useFiltersListStructure();

    const filtersList = filtersListStructure.map((filterStructure) => (
        <Filter filterStructure={filterStructure} />
    ))

    return (
        <form action="" className="filters-list">
            {filtersList}
        </form>
    )
};

FiltersPanel.propTypes = {
    hideLeftSubPanel: PropTypes.bool,
};

FiltersPanel.defaultProps = {
    hideLeftSubPanel: false,
};

export default FiltersPanel;