// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = {
    IconTypography: IconTypography,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconWindmill: IconWindmill,
    IconBrandFramer: IconBrandFramer,
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
            icon: icons['IconTypography'],
            breadcrumbs: false
        },
        {
            id: 'util-data',
            title: 'Data',
            type: 'item',
            url: '/utils/data',
            icon: icons['IconPalette'],
            breadcrumbs: false
        },
        {
            id: 'util-analytics',
            title: 'Analytics',
            type: 'item',
            url: '/utils/analytics',
            icon: icons['IconShadow'],
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Measures',
            type: 'collapse',
            icon: icons['IconWindmill'],
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
