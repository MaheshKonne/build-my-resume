import React from 'react';
import styled from "styled-components";
import {theme} from '../lib/theme';

const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: ${theme.grey};
    margin: 10px;
`;

const Tile = () => {
    return (
        <Wrapper>
            DEFAULT
        </Wrapper>
    );
};

export default Tile;