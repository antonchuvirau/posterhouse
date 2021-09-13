import React from 'react';
import frameClassicBlack from '../assets/images/Frame__Classic-Black.png';
import frameClassicBrown from '../assets/images/Frame__Classic-Brown.png';
import GalleryBlack from '../assets/images/Frame__Gallery-Black.png';
import GalleryEspresso from '../assets/images/Frame__Gallery-Espresso.png';
import GalleryWhite from '../assets/images/Frame__Gallery-White.png';
import ScoopBlack from '../assets/images/Frame__Scoop_Black.png';
import ScoopBrown from '../assets/images/Frame__Scoop_Brown.png';
import ScoopWhite from '../assets/images/Frame__Scoop-White.png';
import EleganzaGold from '../assets/images/Frame__Eleganza-Gold.png';
import EleganzaSilver from '../assets/images/Frame__Eleganza-Silver.png';
import EleganzaBlack from '../assets/images/Frame__Eleganza-Black.png';
import WalnutVeneer from '../assets/images/Frame__Walnut-Veneer.png';
import MapleVeneer from '../assets/images/Frame__Maple-Veneer.png';
import product1 from '../assets/images/product-1.png';
import productImage from '../assets/images/Buy-mock.png';

export const SELECT_PAPER = 'posterhaus/product/SELECT_PAPER';
export const SELECT_SIZE = 'posterhaus/product/SELECT_SIZE';
export const SELECT_FRAME = 'posterhaus/product/SELECT_FRAME';
export const SELECT_MATTE = 'posterhaus/product/SELECT_MATTE';
export const SET_PRODUCT_LIST = 'posterhaus/product/SET_PRODUCT_LIST';
export const SET_PRODUCT_PAGE_PRODUCTS = 'posterhaus/product/SET_PRODUCT_PAGE_PRODUCTS';
export const SET_PRODUCT = 'posterhaus/product/SET_PRODUCT';
export const PRODUCT_PAGE_LOADING = 'posterhaus/product/PRODUCT_PAGE_LOADING';
export const PRODUCT_PAGE_ERROR = 'posterhaus/product/PRODUCT_PAGE_ERROR';
export const PRODUCTS_TO_ORDER_ADD_ONE = 'posterhaus/product/PRODUCT_COUNT_TO_ORDER_ADD_ONE';
export const PRODUCTS_TO_ORDER_REMOVE_ONE = 'posterhaus/product/PRODUCT_COUNT_TO_ORDER_REMOVE_ONE';
export const PRODUCTS_TO_ORDER_ADD = 'posterhaus/product/PRODUCTS_TO_ORDER_ADD';
export const ADD_TO_WHISH_LIST = 'posterhaus/product/ADD_TO_WHISH_LIST';

const paperSelectOptions = {
    title: 'Paper',
    id: 'Paper',
    selected: {
        label: 'Select',
        id: '0',
    },
    options: [
        {
            label: '1” (standard for all prints) **',
            id: '1” (standard for all prints) **',
        },
        {
            label: '2” (additional cost)',
            id: '2” (additional cost)',
        },
        {
            label: '3” (additional cost)',
            id: '3” (additional cost)',
        },
        {
            label: '4” (additional cost)',
            id: '4” (additional cost)',
        },
    ],
    description: '** This is the default option for paper prints. Select this option if you would like to leave a 1" white border all sides of your image. For example, if you order a 8"x10" print your finished paper size will be 10"x12" and your image will be 8"x10".',
};

const sizeSelectOptions = {
    title: 'Size',
    id: 'Size',
    selected: {
        label: 'Select',
        id: '0',
    },
    options: [
        {
            label: '8 x 10',
            id: '8 x 10',
        },
        {
            label: '12 x 18',
            id: '12 x 18',
        },
        {
            label: '16 x 24',
            id: '16 x 24',
        },
        {
            label: '20 x 30',
            id: '20 x 30',
        },
        {
            label: '24 x 36',
            id: '24 x 36',
        },
        {
            label: '32 x 48',
            id: '32 x 48',
        },
        {
            label: '40 x 60',
            id: '40 x 60',
        },
        {
            label: '40 x 60',
            id: '4000 x 6000',
        },
        {
            label: '40 x 60',
            id: '4000000 x 6000000',
        },
    ],
};

const frameSelectOptions = {
    title: 'Frame',
    id: 'Frame',
    selected: {
        label: 'Select',
        id: '0',
    },
    options: [
        {
            label: 'None',
            id: 'None',
            image: null,
        },
        {
            label: 'Classic Black',
            id: 'Classic Black',
            image: frameClassicBlack,
        },
        {
            label: 'Classic Brown',
            id: 'Classic Brown',
            image: frameClassicBrown,
        },
        {
            label: 'Gallery Black',
            id: 'Gallery Black',
            image: GalleryBlack,
        },
        {
            label: 'Gallery Espresso',
            id: 'Gallery Espresso',
            image: GalleryEspresso,
        },
        {
            label: 'Gallery White',
            id: 'Gallery White',
            image: GalleryWhite,
        },
        {
            label: 'Scoop Black',
            id: 'Scoop Black',
            image: ScoopBlack,
        },
        {
            label: 'Scoop Brown',
            id: 'Scoop Brown',
            image: ScoopBrown,
        },
        {
            label: 'Scoop White',
            id: 'Scoop White',
            image: ScoopWhite,
        },
        {
            label: 'Eleganza Gold',
            id: 'Eleganza Gold',
            image: EleganzaGold,
        },
        {
            label: 'Eleganza Silver',
            id: 'Eleganza Silver',
            image: EleganzaSilver,
        },
        {
            label: 'Eleganza Black',
            id: 'Eleganza Black',
            image: EleganzaBlack,
        },
        {
            label: 'Walnut Veneer',
            id: 'Walnut Veneer',
            image: WalnutVeneer,
        },
        {
            label: 'Maple Veneer',
            id: 'Maple Veneer',
            image: MapleVeneer,
        },
    ],
    description: null,
};

const matteSelectOptions = {
    title: 'Matte',
    id: 'Matte',
    selected: {
        label: 'Select',
        id: '0',
    },
    options: [
        {
            label: 'LexJet Sunset Photo eSatin — 300 gsm',
            id: 'LexJet Sunset Photo eSatin — 300 gsm',
        },
        {
            label: 'LexJet Sunset Velvet Rag — 315 gsm',
            id: 'LexJet Sunset Velvet Rag — 315 gsm',
        },
        {
            label: 'Canson Infinity Baryta Photo Satin — 310 gsm',
            id: 'Canson Infinity Baryta Photo Satin — 310 gsm',
        },
    ],
    description: <a href="#" className="matte-select-description">How to choose the paper?</a>,
};

const productList = [
    {
        id: 1,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '1',
        price: '$100.00',
        image: product1,
    },
    {
        id: 2,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '2',
        price: '$100.00',
        image: product1,
    },
    {
        id: 3,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        price: '$100.00',
        authorId: '2',
        image: product1,
    },
    {
        id: 4,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '2',
        price: '$100.00',
        image: product1,
    },
    {
        id: 5,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '5',
        price: '$100.00',
        image: product1,
    },
    {
        id: 6,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '6',
        price: '$100.00',
        image: product1,
    },
    {
        id: 7,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '7',
        price: '$100.00',
        image: product1,
    },
    {
        id: 8,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '8',
        price: '$100.00',
        image: product1,
    },
    {
        id: 9,
        name: 'Glen road',
        author: 'Lewis J Goetz',
        authorId: '9',
        price: '$100.00',
        image: product1,
    },
];

const tags = [
    {
        label: 'Interior',
        id: 'Interior',
    },
    {
        label: 'Kitchen',
        id: 'Kitchen',
    },
    {
        label: 'Travel',
        id: 'Travel',
    },
    {
        label: 'Bathroom',
        id: 'Bathroom',
    },
    {
        label: 'Minimal',
        id: 'Minimal',
    },
    {
        label: 'Interior',
        id: '1',
    },
    {
        label: 'Interior',
        id: '2',
    },
    {
        label: 'Interior',
        id: '3',
    },
    {
        label: 'Interior',
        id: '4',
    },
];

const descriptionFields = [
    {
        label: '1962',
        id: '1',
    },
    {
        label: 'Gelatin silver print',
        id: 'Gelatin silver print',
    },
    {
        label: 'Estate stamp, in ink, au verso',
        id: 'Estate stamp, in ink, au verso',
    },
    {
        label: 'Estate # 6-0209-029-2-1-17 G',
        id: 'Estate # 6-0209-029-2-1-17 G',
    },
    {
        label: 'Unframed',
        id: 'Unframed',
    },
    {
        label: 'Printed circa 1980',
        id: 'Printed circa 1980',
    },
    {
        label: 'Provenance: Direct from the Estate of André Kertész, New York',
        id: 'Provenance: Direct from the Estate of André Kertész, New York',
    },
];

const shippingFields = [
    {
        label: 'Free shipping in North America for any order over $150 USD.',
        id: '1',
    },
];

const product = {
    id: 1,
    productImage,
    author: 'ANDRÉ KERTÉSZ',
    name: '"Buy", Long Island University',
    descriptionFields,
    price: {
        count: '100.00',
        currency: 'EUR',
    },
    shippingFields,
    tags,
};

const initialState = {
    paperSelectOptions,
    sizeSelectOptions,
    frameSelectOptions,
    matteSelectOptions,
    productList,
    productPageProducts : [],
    product,
    productsToOrder: [],
    whishList: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PAPER:
            return {
                ...state,
                paperSelectOptions: {
                    ...state.paperSelectOptions,
                    selected: action.selected,
                },
            };
        case SELECT_SIZE:
            return {
                ...state,
                sizeSelectOptions: {
                    ...state.sizeSelectOptions,
                    selected: action.selected,
                },
            };
        case SELECT_FRAME:
            return {
                ...state,
                frameSelectOptions: {
                    ...state.frameSelectOptions,
                    selected: action.selected,
                },
            };
        case SELECT_MATTE:
            return {
                ...state,
                matteSelectOptions: {
                    ...state.matteSelectOptions,
                    selected: action.selected,
                }
            };
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.productList,
            };
        case SET_PRODUCT_PAGE_PRODUCTS:
            const { authorId, page, count } = action;

            const productPageProducts = state.productList
                .filter((elem) => elem.authorId === authorId)
                .slice(page * count, page * count + count)

            return {
                ...state,
                productPageProducts,
            };
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product,
            };
        case PRODUCT_PAGE_LOADING:
            return {
                ...state,
                product: 'Loading...',
            };
        case PRODUCT_PAGE_ERROR:
            return {
                ...state,
                product: action.error,
            };
        case ADD_TO_WHISH_LIST:{
            const indexInWishList = state.whishList.findIndex((elem) => elem.id === action.id);

            if (indexInWishList === -1) {
                return {
                    ...state,
                    whishList: [...state.whishList, { id: action.id, count: action.count }],
                };
            }

            const newWishList = state.whishList.slice();

            newWishList[indexInWishList].count = action.count;

            return {
                ...state,
                whishList: action.error,
            };
        }
        case PRODUCTS_TO_ORDER_ADD:{
            const productIndexInOrderList = state.productsToOrder.findIndex((elem) => elem.id === action.id);

            if (productIndexInOrderList === -1) {
                return {
                    ...state,
                    productsToOrder: [...state.productsToOrder, { id: action.id, count: action.count }],
                };
            }

            const newProductsToOrderList = state.productsToOrder.slice();
            newProductsToOrderList[productIndexInOrderList].count = action.count;

            return {
                ...state,
                productsToOrder: newProductsToOrderList,
            };
        }
        case PRODUCTS_TO_ORDER_ADD_ONE: {
            const productIndexInOrderList = state.productsToOrder.findIndex((elem) => elem.id === action.id);

            if (productIndexInOrderList === -1) {
                return {
                    ...state,
                    productsToOrder: [...state.productsToOrder, { id: action.id, count: 1 }],
                };
            }

            const newProductsToOrderList = state.productsToOrder.slice();
            newProductsToOrderList[productIndexInOrderList].count += 1;

            return {
                ...state,
                productsToOrder: newProductsToOrderList,
            };
        }
        case PRODUCTS_TO_ORDER_REMOVE_ONE: {
            const productIndexInOrderList = state.productsToOrder.findIndex((elem) => elem.id === action.id);

            if (productIndexInOrderList === -1) {
                return state;
            }
            const newProductsToOrder = state.productsToOrder.slice();
            const product = state.productsToOrder[productIndexInOrderList];

            if (product.count <= 1) {
                newProductsToOrder.splice(productIndexInOrderList, 1);

                return {
                    ...state,
                    productsToOrder: newProductsToOrder
                };
            }

            newProductsToOrder[productIndexInOrderList].count -= 1;

            return {
                ...state,
                productsToOrder: newProductsToOrder,
            }
        }
        default:
            return state;
    }
};

export const fetchProduct = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_PAGE_LOADING });

      const product = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.3) {
            resolve(product);
          } else {
            reject("Error happend");
          }
        }, 1000);
      });
      dispatch({ type: SET_PRODUCT, product });
    } catch (error) {
      dispatch({ type: PRODUCT_PAGE_ERROR, product: error });
    }
  };

export default productReducer;
