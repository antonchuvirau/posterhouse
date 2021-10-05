import { useEffect, useCallback, useRef, useState } from 'react';

const FilterSearchOptionController = () => {
    const [searchQuery, setsearchQuery] = useState('');

    const filters = useRef(null);
    const searchBar = useRef(null);
    const optionLabels = useRef(null);

    const initialiseFilterElements = useCallback((e) => {
        searchBar.current = e.currentTarget?.querySelector('.filter__search-field');
        optionLabels.current = e.currentTarget?.querySelectorAll('.filter__label');
    }, []);

    useEffect(() => {
        if (!optionLabels.current) {
            return;
        }

        for (let optionLabel of optionLabels.current) {
            const label = optionLabel
                .querySelector('.custom-checkbox__label')
                .innerHTML
                .toLowerCase();

            if (searchQuery === '' || label.includes(searchQuery)) {
                optionLabel.classList.remove('filter__label--state_invisible');
            } else {
                optionLabel.classList.add('filter__label--state_invisible');
            }
        }

    }, [searchQuery])

    const onSearch = useCallback((e) => {
        const searchValue = e.currentTarget.value.toLowerCase();
        setsearchQuery(searchValue);
    }, []);

    const onSearchClick = useCallback((e) => {
        e.stopPropagation();
    }, []);

    const addEventListenersOnElements = useCallback(() => {
        if (searchBar.current) {
            searchBar.current.addEventListener('input', onSearch);
            searchBar.current.addEventListener('click', onSearchClick);
        }
    }, [
        onSearchClick,
        onSearch,
    ]);

    const onFilterClick = useCallback((e) => {
        initialiseFilterElements(e);
        addEventListenersOnElements();
    }, [
        addEventListenersOnElements,
        initialiseFilterElements,
    ])

    useEffect(() => {
        filters.current = document.getElementsByClassName('filter');

        if (!filters.current) {
            return;
        }

        for (let filter of filters.current) {
            filter.addEventListener('click', onFilterClick);
        }

        return () => {
            for (let filter of filters.current) {
                filter.removeEventListener('click', onFilterClick);
            }
        }
    }, [onFilterClick])

    return null;
};

export default FilterSearchOptionController;
