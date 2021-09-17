
import React, { useCallback, useEffect, useRef, useState } from 'react';

const ManagePanel = () => {
    const [isSearchBarShown, setIsSearchBarShown] = useState(false);
    const [isFilterPanelShown, setIsFilterPanelShown] = useState(false);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

    const filtersPanelComponent = useRef(null);
    const backDropComponent = useRef(null);
    const filterBtn = useRef(null);
    const searchBtn = useRef(null);
    const searchBarComponent = useRef(null);
    const sortByBtn = useRef(null);
    const sortByMenuComponent = useRef(null);
    const managePanelTabs = useRef(null);
    const productCardLikeBtns = useRef(null);

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
        if (!filtersPanelComponent.current || !backDropComponent.current || !filterBtn.current) {
            return;
        }

        filtersPanelComponent.current.classList.toggle('side-panel--state_invisible');
        backDropComponent.current.classList.toggle('side-panel__backdrop--state_invisible');
        filterBtn.current.classList.toggle('manage-panel__filter-item--state_active');
    }, [])

    const onProductCardLikeBtnClick = useCallback((e) => {
        e.currentTarget.classList.toggle('product-card__like-button--state_inactive');
        e.currentTarget.classList.toggle('product-card__like-button--state_active');
    }, []);

    const togleSearchbarVisibility = useCallback(() => {
        if (!searchBtn.current || !searchBarComponent.current) {
            return;
        }

        searchBtn.current.classList.toggle('manage-panel__filter-item--state_active');
        searchBarComponent.current.classList.toggle('manage-panel__search-field--state_invisible');
    }, []);

    const toggleSortMenyVisibility = useCallback(() => {
        if (!sortByBtn.current || !sortByMenuComponent.current) {
            return
        }
        sortByBtn.current.classList.toggle('manage-panel__filter-item--state_active');
        sortByMenuComponent.current.classList.toggle('dropdown-menu__content--state_invisible');
        sortByMenuComponent.current.classList.toggle('dropdown-menu__content--state_visible');
    }, []);

    useEffect(() => {
        toggleFiltersPanelVisibility();
    }, [isFilterPanelShown, toggleFiltersPanelVisibility])

    useEffect(() => {
        togleSearchbarVisibility();
    }, [isSearchBarShown, togleSearchbarVisibility])

    useEffect(() => {
        toggleSortMenyVisibility();
    }, [isSortMenuOpen, toggleSortMenyVisibility])

    useEffect(() => {
        filtersPanelComponent.current = document.getElementById('side-panel');
        backDropComponent.current = document.getElementById('side-panel__backdrop');
        filterBtn.current = document.getElementById('manage-panel__filter-btn');
        searchBtn.current = document.getElementById('manage-panel__search-btn');
        searchBarComponent.current = document.getElementById('manage-panel__search-field');
        sortByBtn.current = document.getElementById('manage-panel__sort-btn');
        sortByMenuComponent.current = document.getElementById('manage-panel__sort-menu');
        managePanelTabs.current = document.getElementById('manage-panel__tabs');
        productCardLikeBtns.current = document.getElementsByClassName('product-card__like-button');

        managePanelTabs.current.addEventListener('click', onTabClick);
        sortByMenuComponent.current.addEventListener('click', onChooseSortOption)
        sortByBtn.current.addEventListener('click', onSortByBtnClick);
        filterBtn.current.addEventListener('click', onFiltersPanelOpen);
        searchBtn.current.addEventListener('click', onSearchBtnClick)
        backDropComponent.current.addEventListener('click', onBackdropClick)
        window.addEventListener("click", handleClickOutsideSearchField);
        window.addEventListener("click", handleClickOutsideSortMenu);

        for (let i = 0; i < productCardLikeBtns.current.length; i += 1) {
            productCardLikeBtns.current[i].addEventListener('click', onProductCardLikeBtnClick);
        }

        return () => {
            window.removeEventListener("click", handleClickOutsideSearchField);
            backDropComponent.current.removeEventListener("click", onBackdropClick);
            searchBtn.current.removeEventListener('click', onSearchBtnClick)
            filterBtn.current.removeEventListener('click', onFiltersPanelOpen);
            sortByBtn.current.removeEventListener('click', onSortByBtnClick);
            sortByMenuComponent.current.removeEventListener('click', onChooseSortOption);

            for (let i = 0; i < productCardLikeBtns.current.length; i += 1) {
                productCardLikeBtns.current[i].removeEventListener('click', onProductCardLikeBtnClick);
            }
        };
    }, [
        handleClickOutsideSearchField,
        onBackdropClick,
        onSearchBtnClick,
        onFiltersPanelOpen,
        onSortByBtnClick,
        onChooseSortOption,
        handleClickOutsideSortMenu,
        onTabClick,
        onProductCardLikeBtnClick,
    ])

    return (
        <div>

        </div>
        // <div className="manage-panel">
        //     <div className="manage-panel__buttons-bar">

        //             <div className="manage-panel__filters" id="manage-panel__tabs">
        //                 <div className="manage-panel__tab manage-panel__filter-item manage-panel__filter-item--state_active">
        //                     All
        //                 </div>
        //                 <div className="manage-panel__tab manage-panel__filter-item">
        //                     Artwork
        //                 </div>
        //                 <div className="manage-panel__tab manage-panel__filter-item">
        //                     Print
        //                 </div>
        //             </div>

        //         <div className="manage-panel__filters">
        //             <div className="manage-panel__filter-item">
        //                 <div className="dropdown-menu">
        //                     <button
        //                         id="manage-panel__sort-btn"
        //                         className="dropdown-menu__btn"
        //                     >
        //                         Sort by
        //                     </button>
        //                     <div
        //                         id="manage-panel__sort-menu"
        //                         className="dropdown-menu__content dropdown-menu__content--state_invisible"
        //                     >
        //                         <span className="dropdown-menu__item dropdown-menu__item--state_selected" >
        //                             A to Z
        //                         </span>
        //                         <span className="dropdown-menu__item" >
        //                             Price from low to high
        //                         </span>
        //                         <span className="dropdown-menu__item" >
        //                             Price from high to low
        //                         </span>
        //                         <span className="dropdown-menu__item" >
        //                             Newest
        //                         </span>
        //                         <span className="dropdown-menu__item" >
        //                             Popular
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div
        //                 id="manage-panel__filter-btn"
        //                 className="manage-panel__filter-item"
        //             >
        //                 Filter
        //             </div>
        //             <div
        //                 id="manage-panel__search-btn"
        //                 className="manage-panel__filter-item manage-panel__search-btn"
        //             >
        //                 Search
        //             </div>
        //         </div>
        //     </div>
        //     <div className="manage-panel__search-bar">
        //         <textarea
        //             id="manage-panel__search-field"
        //             className="manage-panel__search-field manage-panel__search-field--state_invisible"
        //             placeholder="Search"
        //         />
        //     </div>
        // </div>
    )
};

export default ManagePanel;