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

export const SELECT_PAPER = 'product/SELECT_PAPER';
export const SELECT_SIZE = 'product/SELECT_SIZE';
export const SELECT_FRAME = 'product/SELECT_FRAME';
export const SELECT_MATTE = 'product/SELECT_MATTE';

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


const initialState = {
    paperSelectOptions,
    sizeSelectOptions,
    frameSelectOptions,
    matteSelectOptions,
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
    default:
      return state;
  }
};

export default productReducer;
