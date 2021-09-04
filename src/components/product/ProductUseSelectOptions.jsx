import React from 'react';

export const getPaperSelectOptions = () => {
    const paperSelectOptions = {
        title: 'Paper',
        selectedOption: {
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

    return paperSelectOptions;
};

export const getSizeSelectOptions = () => {
    const sizeSelectOptions = {
        title: 'Size',
        selectedOption: {
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
        description: null,
    };

    return sizeSelectOptions;
};

export const getFrameSelectOptions = () => {
    const frameSelectOptions = {
        title: 'Size',
        selectedOption: {
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
                image: '../../assets/images/Frame__Classic-Black.png',
            },
            {
                label: 'Classic Brown',
                id: 'Classic Brown',
                image: '../../assets/images/Frame__Classic-Brown.png',
            },
            {
                label: 'Gallery Black',
                id: 'Gallery Black',
                image: '../../assets/images/Frame__Gallery-Black.png',
            },
            {
                label: 'Gallery Espresso',
                id: 'Gallery Espresso',
                image: '../../assets/images/Frame__Gallery-Espresso.png',
            },
            {
                label: 'Gallery White',
                id: 'Gallery White',
                image: '../../assets/images/Frame__Gallery-White.png',
            },
            {
                label: 'Scoop Black',
                id: 'Scoop Black',
                image: '../../assets/images/Frame__Scoop_Black.png',
            },
            {
                label: 'Scoop Brown',
                id: 'Scoop Brown',
                image: '../../assets/images/Frame__Scoop_Brown.png',
            },
            {
                label: 'Scoop White',
                id: 'Scoop White',
                image: '../../assets/images/Frame__Scoop-White.png',
            },
            {
                label: 'Eleganza Gold',
                id: 'Eleganza Gold',
                image: '../../assets/images/Frame__Eleganza-Gold.png',
            },
            {
                label: 'Eleganza Silver',
                id: 'Eleganza Silver',
                image: '../../assets/images/Frame__Eleganza-Silver.png',
            },
            {
                label: 'Eleganza Black',
                id: 'Eleganza Black',
                image: '../../assets/images/Frame__Eleganza-Black.png',
            },
            {
                label: 'Walnut Veneer',
                id: 'Walnut Veneer',
                image: '../../assets/images/Frame__Walnut-Veneer.png',
            },
            {
                label: 'Maple Veneer',
                id: 'Maple Veneer',
                image: '../../assets/images/Frame__Maple-Veneer.png',
            },
        ],
        description: null,
    };

    return frameSelectOptions;
};

export const getMatteSelectOptions = () => {
    const frameSelectOptions = {
        title: 'Matte',
        selectedOption: {
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
        description: <a href="#">How to choose the paper?</a>,
    };

    return frameSelectOptions;
};