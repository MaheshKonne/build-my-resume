const breakpoints = {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
};

const device = {
    mobile: `(min-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
};

const theme = {
    grey: 'grey',
    white: '#fff',
    "canva-purple-modern-resume": {
        primary: '#7c4373',
        secondary: '#a680a0',
        tertiary: '#cfc7cd',
        quaternary: '#eee9ee',
    }
};

export {device, theme};