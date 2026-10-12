
import IconSun from '/public/images/icon-sun.svg';
import MoonIcon from '/public/images/icon-moon.svg';


export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor: 'bg-light-purple-300',
            textColor: 'text-light-gray-600',
        },
        todo: {
            backgroundColor: 'bg-light-gray-50',
            borderColor: 'border-light-gray-300',
            textColor: 'text-dark-purple-700',
        },
        icon: MoonIcon,
    },
    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor: 'bg-dark-navy-950',
            textColor: 'text-dark-purple-800',
        },
        todo: {
            backgroundColor: 'bg-dark-navy-900',
            borderColor: 'border-dark-purple-600',
            textColor: 'text-light-purple-300',
        },
        icon: IconSun,
    },
};
