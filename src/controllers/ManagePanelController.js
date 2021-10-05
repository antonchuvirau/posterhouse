
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFilterSearchOptionController } from '../hooks/useFilterSearchOptionController';

const ManagePanel = () => {
    const [isSearchBarShown, setIsSearchBarShown] = useState(false);
    const [isFilterPanelShown, setIsFilterPanelShown] = useState(false);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

    const managePanelTabs = useRef(null);
    const filtersPanel = useRef(null);

    const filtersPanelBackdrop = useRef(null);
    const openFiltersPanelBtn = useRef(null);

    const openSearchBarBtn = useRef(null);
    const searchBar = useRef(null);

    const openSortByMenuBtn = useRef(null);
    const sortByMenu = useRef(null);

    const { clearAllSearchBars } = useFilterSearchOptionController();

    const onSortByBtnClick = useCallback(() => {
        setIsSortMenuOpen((prevState) => !prevState);
    }, []);

    const onSearchBtnClick = useCallback(() => {
        setIsSearchBarShown((prevState) => !prevState);
    }, []);

    const onFiltersPanelOpen = useCallback(() => {
        setIsFilterPanelShown(true);
    }, []);

    const onBackdropClick = useCallback(() => {
        setIsFilterPanelShown(false)
    }, []);

    const onTabClick = useCallback((e) => {
        const allTabs = e.currentTarget.children;

        for (let i = 0; i < allTabs.length; i += 1) {
            if (allTabs[i].classList.contains('manage-panel__filter-item--state_active')) {
                allTabs[i].classList.remove('manage-panel__filter-item--state_active');
            }
        }

        e.target.classList.add('manage-panel__filter-item--state_active');
    }, []);

    const onChooseSortOption = useCallback((e) => {
        const allSortOptions = e.currentTarget.children;

        for (let i = 0; i < allSortOptions.length; i += 1) {
            if (allSortOptions[i].classList.contains('dropdown-menu__item--state_selected')) {
                allSortOptions[i].classList.remove('dropdown-menu__item--state_selected');
            }
        }

        e.target.classList.add('dropdown-menu__item--state_selected');
    }, []);

    const handleClickOutsideSearchField = useCallback((event) => {
        if (event.target.matches('.manage-panel__search-field') || event.target.matches('.manage-panel__search-btn')) {
            return;
        }

        setIsSearchBarShown(false);
    }, []);

    const handleClickOutsideSortMenu = useCallback((event) => {
        if (event.target.matches('#manage-panel__sort-menu') || event.target.matches('#manage-panel__sort-btn')) {
            return;
        }

        setIsSortMenuOpen(false);
    }, []);

    const toggleFiltersPanelVisibility = useCallback(() => {
        if (!filtersPanel.current || !filtersPanelBackdrop.current || !openFiltersPanelBtn.current) {
            return;
        }

        if (isFilterPanelShown) {
            filtersPanel.current.classList.remove('side-panel--state_invisible');
            filtersPanelBackdrop.current.classList.remove('backdrop--state_invisible');
            openFiltersPanelBtn.current.classList.add('manage-panel__filter-item--state_active');
            return;
        }

        filtersPanel.current.classList.add('side-panel--state_invisible');
        filtersPanelBackdrop.current.classList.add('backdrop--state_invisible');
        openFiltersPanelBtn.current.classList.remove('manage-panel__filter-item--state_active');
    }, [isFilterPanelShown])

    const togleSearchbarVisibility = useCallback(() => {
        if (!openSearchBarBtn.current || !searchBar.current) {
            return;
        }

        openSearchBarBtn.current.classList.toggle('manage-panel__filter-item--state_active');
        searchBar.current.classList.toggle('manage-panel__search-field--state_invisible');
    }, []);

    const toggleSortMenyVisibility = useCallback(() => {
        if (!openSortByMenuBtn.current || !sortByMenu.current) {
            return
        }

        if (isSortMenuOpen) {
            openSortByMenuBtn.current.classList.add('manage-panel__filter-item--state_active');
            sortByMenu.current.classList.remove('dropdown-menu__content--state_invisible');
            sortByMenu.current.classList.add('dropdown-menu__content--state_visible');
            return;
        }

        openSortByMenuBtn.current.classList.remove('manage-panel__filter-item--state_active');
        sortByMenu.current.classList.add('dropdown-menu__content--state_invisible');
        sortByMenu.current.classList.remove('dropdown-menu__content--state_visible');
    }, [isSortMenuOpen]);

    useEffect(() => {
        toggleFiltersPanelVisibility();
        clearAllSearchBars();
    }, [
        isFilterPanelShown,
        toggleFiltersPanelVisibility,
        clearAllSearchBars,
    ])

    useEffect(() => {
        togleSearchbarVisibility();
    }, [isSearchBarShown, togleSearchbarVisibility])

    useEffect(() => {
        toggleSortMenyVisibility();
    }, [isSortMenuOpen, toggleSortMenyVisibility])

    const addEventListeners = useCallback(() => {
        if (managePanelTabs.current) {
            managePanelTabs.current.addEventListener('click', onTabClick);
        }

        if (sortByMenu.current) {
            sortByMenu.current.addEventListener('click', onChooseSortOption)
        }

        if (openSortByMenuBtn.current) {
            openSortByMenuBtn.current.addEventListener('click', onSortByBtnClick);
        }

        if (openFiltersPanelBtn.current) {
            openFiltersPanelBtn.current.addEventListener('click', onFiltersPanelOpen);
        }

        if (openSearchBarBtn.current) {
            openSearchBarBtn.current.addEventListener('click', onSearchBtnClick)
        }

        if (filtersPanelBackdrop.current) {
            filtersPanelBackdrop.current.addEventListener('click', onBackdropClick)
        }

        window.addEventListener("click", handleClickOutsideSearchField);
        window.addEventListener("click", handleClickOutsideSortMenu);
    }, [
        handleClickOutsideSearchField,
        onBackdropClick,
        onSearchBtnClick,
        onFiltersPanelOpen,
        onSortByBtnClick,
        onChooseSortOption,
        handleClickOutsideSortMenu,
        onTabClick,
    ]);

    const removeEventListeners = useCallback(() => {
        if (managePanelTabs.current) {
            managePanelTabs.current.removeEventListener('click', onTabClick);
        }

        if (sortByMenu.current) {
            sortByMenu.current.removeEventListener('click', onChooseSortOption);
        }

        if (openSortByMenuBtn.current) {
            openSortByMenuBtn.current.removeEventListener('click', onSortByBtnClick);
        }

        if (openFiltersPanelBtn.current) {
            openFiltersPanelBtn.current.removeEventListener('click', onFiltersPanelOpen);
        }

        if (openSearchBarBtn.current) {
            openSearchBarBtn.current.removeEventListener('click', onSearchBtnClick)
        }

        if (filtersPanelBackdrop.current) {
            filtersPanelBackdrop.current.removeEventListener("click", onBackdropClick);
        }

        window.removeEventListener("click", handleClickOutsideSearchField);
        window.removeEventListener("click", handleClickOutsideSortMenu);
    }, [
        handleClickOutsideSearchField,
        onBackdropClick,
        onSearchBtnClick,
        onFiltersPanelOpen,
        onSortByBtnClick,
        onChooseSortOption,
        handleClickOutsideSortMenu,
        onTabClick,
    ]);

    useEffect(() => {
        filtersPanel.current = document.getElementById('side-panel');
        filtersPanelBackdrop.current = document.getElementById('side-panel__backdrop');
        openFiltersPanelBtn.current = document.getElementById('manage-panel__filter-btn');
        openSearchBarBtn.current = document.getElementById('manage-panel__search-btn');
        searchBar.current = document.getElementById('manage-panel__search-field');
        openSortByMenuBtn.current = document.getElementById('manage-panel__sort-btn');
        sortByMenu.current = document.getElementById('manage-panel__sort-menu');
        managePanelTabs.current = document.getElementById('manage-panel__tabs');

        addEventListeners();

        return () => {
            removeEventListeners();
        };
    }, [addEventListeners, removeEventListeners]);

    return null;
};

export default ManagePanel;