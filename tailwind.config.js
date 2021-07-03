/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    // Read more about JIT functionality @ https://tailwindcss.com/docs/just-in-time-mode
    mode: 'jit',
    purge: [
        './components/**/*.{ts,tsx}',
        './modules/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            ...defaultTheme.fontSize,
            '3xl': ['1.75rem', '2.5rem'],
            '4xl': ['2rem', '3rem'],
        },
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            red: colors.rose,
            yellow: colors.amber,
            gray: colors.gray,
            blue: colors.blue,
            cyan: colors.cyan,
            white: colors.white,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        //lineClampPlugin,
    ],
};
