import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import Header from "./components/Header";
import {Button} from '@material-ui/core'
import {Link} from "react-router-dom";



const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

function App() {
  return (
     <Fragment>
        <GlobalStyles />
        <Container>
            <Header variant="contained" color="primary">
                <Link to="/templates">
                    <Button>
                        Choose a Template
                    </Button>
                </Link>
            </Header>
        </Container>
     </Fragment>
  );
}

export default App;
