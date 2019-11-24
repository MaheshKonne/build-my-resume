import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Header = ({heading = 'h1', letterSpacing = 'normal', children, color = '#000'}) => {
    const Component = styled(heading)`
        margin: 0;
        padding: 0;
        color: ${color};
        letter-spacing: ${letterSpacing};
    `;
    return (
        <Component>
            {children}
        </Component>
    );
};

Header.defaultProps = {
    heading: 'h1',
};

Header.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Header;