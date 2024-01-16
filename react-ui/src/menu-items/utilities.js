// assets
import {  IconCheckbox,  IconChartBar, IconChartInfographic, IconLayoutGridAdd, IconDatabase } from '@tabler/icons';

// constant
const icons = {
    IconSurvey: IconCheckbox,
    IconData: IconDatabase,
    IconAxioms: IconChartBar,
    IconMeasure: IconChartInfographic,
    IconLayoutGridAdd: IconLayoutGridAdd
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

export const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-surveys',
            title: 'Surveys',
            type: 'item',
            url: '/utils/surveys',
            icon: icons['IconSurvey'],
            breadcrumbs: false
        },
        {
            id: 'util-data',
            title: 'Data',
            type: 'item',
            url: '/utils/data',
            icon: icons['IconData'],
            breadcrumbs: false
        },
        {
            id: 'util-axioms',
            title: 'Axioms',
            type: 'item',
            url: '/utils/axioms',
            icon: icons['IconAxioms'],
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Measures',
            type: 'collapse',
            icon: icons['IconMeasure'],
            children: [
                {
                    id: 'E&R',
                    title: 'E&R',
                    type: 'item',
                    url: '/icons/er-measure',
                    breadcrumbs: false
                },
                {
                    id: 'Frank Measure',
                    title: 'Frank Measure',
                    type: 'item',
                    url: '/icons/frank-measure',
                    breadcrumbs: false
                },
                {
                    id: 'Carlos Measure',
                    title: 'Carlos Mesure',
                    type: 'item',
                    url: '/icons/carlos-measure',
                    breadcrumbs: false
                },
                {
                    id: 'Experts Measure',
                    title: 'Experts Measure',
                    type: 'item',
                    url: '/icons/expert-measure',
                    breadcrumbs: false
                }
            ]
        }
    ]
};
