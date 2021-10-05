import { useEffect, useCallback, useRef, useState } from 'react';

export const useFilterSearchOptionController = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filters = useRef(null);
    const searchBars = useRef(null);
    const searchBar = useRef(null);
    const optionLabels = useRef(null);

    const initialiseFilterElements = useCallback((e) => {
        searchBar.current = e.currentTarget?.querySelector('.search-container__input');
        optionLabels.current = e.currentTarget?.querySelectorAll('.search-container__option');
    }, []);

    const clearAllSearchBars = useCallback(() => {
        setSearchQuery('');

        if (!searchBars.current) {
            return;
        }

        for (let searchBarItem of searchBars.current) {
            searchBarItem.value = '';
        }
    }, []);

    useEffect(() => {
        if (!optionLabels.current) {
            return;
        }

        for (let optionLabel of optionLabels.current) {
            const label = optionLabel
                .querySelector('.search-container__option-label')
                .innerHTML
                .toLowerCase();

            if (searchQuery === '' || label.includes(searchQuery)) {
                optionLabel.classList.remove('search-container__option--state_invisible');
            } else {
                optionLabel.classList.add('search-container__option--state_invisible');
            }
        }

    }, [searchQuery])

    const onSearch = useCallback((e) => {
        const searchValue = e.currentTarget.value.toLowerCase();
        setSearchQuery(searchValue);
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
        filters.current = document.getElementsByClassName('search-container');
        searchBars.current = document.getElementsByClassName('search-container__input');

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

    return {
        searchQuery,
        setSearchQuery,
        clearAllSearchBars,
    };
};
