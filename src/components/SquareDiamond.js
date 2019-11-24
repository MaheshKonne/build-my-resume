import React from "react";
import styled from "styled-components";
import {theme} from "../lib/theme";

const SquareDiamond = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: ${props => props.color};
    transform: rotate(45deg);
`;

const Diamond = ({size = 10, color = theme.white}) => {
    return (
        <SquareDiamond size={size} color={color} />
    );
};

export default Diamond;