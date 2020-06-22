import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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

const HeadlineContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 5px 30px;
  margin-bottom: 50px;
  width: 45vh;
  display: flex;
  text-align: center;
  justify-content: center;
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


class BoasVindasCard extends Component {
  render() {
    return (
      <Background>
        <div>
          <HeadlineContainer>
            <Headline>
              IndicaFilmes <span role="img">⚛️</span>
            </Headline>
          </HeadlineContainer>
        </div>
        <MuiThemeProvider theme={MyTheme}>
          <Button
            variant={"contained"}
            onClick={this.props.handleRenderMovieOrSerie}
            color={"primary"}
            size={"large"}
          >
            Quero indicações
          </Button>
        </MuiThemeProvider>
      </Background>
    );
  }
}

export default BoasVindasCard;
