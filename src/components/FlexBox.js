import React from "react";
import styled from "styled-components";

const FlexContainer = styles => elem => {
    return (
        styled(elem)`
            display: flex; 
            ${{...styles}};
        `
    )
};

const FlexCell = styles => elem => {
    return (
        styled(elem)`
            ${{...styles}};
        `
    )
};

export {FlexContainer, FlexCell};
