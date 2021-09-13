export const WHISH_LIST_ADD_ONE = 'posterhaus/product/WHISH_LIST_ADD_ONE';
export const WHISH_LIST_REMOVE_ONE = 'posterhaus/product/WHISH_LIST_REMOVE_ONE';

const initialState = {
    whishList: [],
};

const whishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case WHISH_LIST_ADD_ONE: {
            const indexInWishList = state.whishList.findIndex((elem) => elem.id === action.id);

            if (indexInWishList === -1) {
                return {
                    ...state,
                    whishList: [...state.whishList, { id: action.id, count: 1 }],
                };
            }

            const newWishList = state.whishList.slice();

            newWishList[indexInWishList].count += 1;

            return {
                ...state,
                whishList: newWishList,
            };
        };
        case WHISH_LIST_REMOVE_ONE: {
            const indexInWishList = state.whishList.findIndex((elem) => elem.id === action.id);

            if (indexInWishList === -1) {
                return state;
            }

            const newWishList = state.whishList.slice();
            const product = state.whishList[indexInWishList];

            if (product.count <= 1) {
                newWishList.splice(indexInWishList, 1);

                return {
                    ...state,
                    whishList: newWishList
                };
            }

            newWishList[indexInWishList].count -= 1;

            return {
                ...state,
                whishList: newWishList,
            }
        };
        default:
            return state;
    }
};



export default whishListReducer;
