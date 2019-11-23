import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from "styled-components";

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
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const Content = styled.p`
  font-size: 16px;
`;

function App() {
  return (
     <Fragment>
        <GlobalStyles />
        <Container>
          <header>
              Build My Resume
          </header>
          <Content>In progress...</Content>
        </Container>
     </Fragment>
  );
}

export default App;
