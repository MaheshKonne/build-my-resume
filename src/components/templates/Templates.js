import React, {Fragment} from 'react';
import Header from "../Header";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Tile from "../Tile";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const TemplatesContainer = styled.div`
    display: flex;
    max-width: 910px;
`;

const Templates = () => {
    return (
        <Container>
            <Header>Choose a Template to generate your resume</Header>
            <TemplatesContainer>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </TemplatesContainer>
            <Button>
                Generate Resume
            </Button>
        </Container>
    )
};

export default Templates;