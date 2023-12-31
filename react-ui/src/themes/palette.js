/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
export function themePalette(theme) {
    return {
        mode: theme.customization.navType,
        common: {
            black: '#000000'
        },
        primary: {
            light: '#7C8EA6',
            main: '#45648C',
            dark: '#022859',
            200: '#F2F2F2',
            800: '#0D0D0D'
        },
        secondary: {
            light: '#022859',
            main: '#45648C',
            dark: '#7C8EA6',
            200: '#F2F2F2',
            800: '#0D0D0D'
        },
        error: {
            light: theme.colors.errorLight,
            main: theme.colors.errorMain,
            dark: theme.colors.errorDark
        },
        orange: {
            light: theme.colors.orangeLight,
            main: theme.colors.orangeMain,
            dark: theme.colors.orangeDark
        },
        warning: {
            light: theme.colors.warningLight,
            main: theme.colors.warningMain,
            dark: theme.colors.warningDark
        },
        success: {
            light: theme.colors.successLight,
            200: theme.colors.success200,
            main: theme.colors.successMain,
            dark: theme.colors.successDark
        },
        grey: {
            50: theme.colors.grey50,
            100: theme.colors.grey100,
            500: theme.darkTextSecondary,
            600: theme.heading,
            700: theme.darkTextPrimary,
            900: theme.textDark
        },
        text: {
            primary: theme.darkTextPrimary,
            secondary: theme.darkTextSecondary,
            dark: theme.textDark,
            hint: theme.colors.grey100
        },
        background: {
            paper: theme.paper,
            default: theme.backgroundDefault
        }
    };
}