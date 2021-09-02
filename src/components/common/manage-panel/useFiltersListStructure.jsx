
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import SidePanelContext from '../../../contexts/SidePanelContext';

export const useFiltersListStructure = () => {
    const filtersListStructure = [
        {
            title: 'Category',
            textarea: false,
            checkBoxes: [
                {
                    label: 'Framed',
                    id: 'Framed',
                    checked: true,
                },
                {
                    label: 'Print',
                    id: 'Print',
                    checked: false,
                },
            ]
        },
        { delimiter: true },
        {
            title: 'Theme / Genre',
            textarea: true,
            useScroll: true,
            checkBoxes: [
                {
                    label: 'Abstract',
                    id: 'Abstract',
                    checked: true,
                },
                {
                    label: 'Architecture',
                    id: 'Architecture',
                    checked: false,
                },
                {
                    label: 'Contemporary',
                    id: 'Contemporary',
                    checked: false,
                },
                {
                    label: 'Celebrity',
                    id: 'Celebrity',
                    checked: false,
                },
                {
                    label: 'Landscape',
                    id: 'Landscape',
                    checked: false,
                },
                {
                    label: 'Minimalist',
                    id: 'Minimalist',
                    checked: false,
                },
            ]
        },
        { delimiter: true },
        {
            title: 'Artist',
            textarea: true,
            useScroll: true,
            checkBoxes: [
                {
                    label: 'Name Surname',
                    id: 'Name Surname 1',
                    checked: true,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 2',
                    checked: false,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 3',
                    checked: false,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 4',
                    checked: false,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 5',
                    checked: false,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 6',
                    checked: false,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 7',
                    checked: false,
                },
                {
                    label: 'Name Surname',
                    id: 'Name Surname 8',
                    checked: false,
                },
            ]
        },
        { delimiter: true },
        {
            title: 'Colour',
            textarea: false,
            checkBoxes: [
                {
                    label: 'Colour',
                    id: 'Colour',
                    checked: true,
                },
                {
                    label: 'Black & White',
                    id: 'Black & White',
                    checked: false,
                },
            ]
        },
        { delimiter: true },
        {
            title: 'Price',
            textarea: false,
            checkBoxes: [
                {
                    label: '0-50',
                    id: '0-50',
                    checked: true,
                },
                {
                    label: '50-100',
                    id: '50-100',
                    checked: false,
                },
                {
                    label: '100-200',
                    id: '100-200',
                    checked: false,
                },
                {
                    label: '200-300',
                    id: '200-300',
                    checked: false,
                },
                {
                    label: '300-400',
                    id: '300-400',
                    checked: false,
                },
                {
                    label: '400 and higher',
                    id: '400 and higher',
                    checked: false,
                },
            ]
        },
        { delimiter: true },
        {
            title: 'Size',
            textarea: false,
            checkBoxes: [
                {
                    label: '8 x 10',
                    id: '8 x 10',
                    checked: true,
                },
                {
                    label: '12 x 18',
                    id: '12 x 18',
                    checked: false,
                },
                {
                    label: '16 x 24',
                    id: '16 x 24',
                    checked: false,
                },
                {
                    label: '20 x 30',
                    id: '20 x 30',
                    checked: false,
                },
                {
                    label: '24 x 36',
                    id: '24 x 36',
                    checked: false,
                },
                {
                    label: '32 x 48',
                    id: '32 x 48',
                    checked: false,
                },
                {
                    label: '40 x 60',
                    id: '40 x 60',
                    checked: false,
                },
            ]
        },
        { delimiter: true },
        {
            title: 'Tags',
            textarea: true,
            checkBoxes: [],
        },
    ];

    return { filtersListStructure };
};

useFiltersListStructure.propTypes = {

};

useFiltersListStructure.defaultProps = {

};
