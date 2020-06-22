import React, { Component } from "react";
import styled from "styled-components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#00994D",
      dark: "#006633",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const Container = styled.div`
  .container {
    padding: 40px;
    background: #419be0;
  }
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Headline = styled.h1`
  font-size: 6vh;
  color: #282c34;
`;

class EstouBuscando extends Component {
  render() {
    return (
      <MuiThemeProvider theme={MyTheme}>
        <Background>
          <Headline>Estou buscando:</Headline>
          <div>
            <Button
              variant={"contained"}
              onClick={this.props.handleRenderStylesAndGenres}
              color={"primary"}
              size={"large"}
            >
              Próximo Passo
            </Button>
          </div>
        </Background>
      </MuiThemeProvider>
    );
  }
}

export default EstouBuscando;
