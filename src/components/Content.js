import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Component = styled.p`
        margin: 0;
        color: ${props => props.color};
        letter-spacing: ${props => props.letterSpacing};
    `;

const Content = ({letterSpacing = 'normal', children, color = '#000'}) => {
    return (
        <Component color={color} letterSpacing={letterSpacing}>
            {children}
        </Component>
    );
};

Content.propTypes = {
    letterSpacing: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Content;