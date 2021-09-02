export const SORTED_ITEMS = {
    PRODUCTS: 'PRODUCTS',
    ARTISTS: 'ARTISTS',
};

const PRODUCTS_SORTING_OPTIONS_VALUES = {
    A_TO_Z: 'A to Z',
    PRICE_LOW_TO_HIGH: 'Price from low to high',
    PRICE_HIGH_TO_LOW: 'Price from high to low',
    NEWEST: 'Newest',
    POPULAR: 'Popular',
};

const ARTISTS_SORTING_OPTIONS_VALUES = {
    A_TO_Z: 'A to Z',
    NEWEST: 'Newest',
    POPULAR: 'Popular',
};

const getSortedByOptionsStructure = (optionsMap) => Object.values(optionsMap)
    .map((option, index) => ({
        id: `${option}${index}`,
        label: option,
        selected: index === 0 ? true : false,
    }))

export const getInitialSortedByOptionsState = (sortedItems) => {
    let initialSortedByOptionsState;

    switch (sortedItems) {
        case SORTED_ITEMS.ARTISTS:
            initialSortedByOptionsState = getSortedByOptionsStructure(ARTISTS_SORTING_OPTIONS_VALUES);
            break;
        default:
            initialSortedByOptionsState = getSortedByOptionsStructure(PRODUCTS_SORTING_OPTIONS_VALUES);
            break;
    }

    return initialSortedByOptionsState;
};
