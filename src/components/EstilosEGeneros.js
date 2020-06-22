import React, { Component } from "react";
import styled from "styled-components";
import BotaoEstiloGenero from "../components/BotaoEstiloGenero.js";
import MoviesResult from "./MoviesResult.js";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#00994D",
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

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;
`;

const GenreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.h1`
  font-size: 6vh;
  color: #282c34;
`;

class EstilosEGeneros extends Component {
  state = {
    suspense: false,
    terror: false,
    acao: false,
    drama: false,
    scifi: false,
    comedia: false,
    animacao: false,
    renderMovies: false,
  };

  componentDidMount = () => {};

  onChangeSuspense = (event) => {
    this.setState({ suspense: !this.state.suspense });
  };
  onChangeTerror = (event) => {
    this.setState({ terror: !this.state.terror });
  };

  onChangeAcao = (event) => {
    this.setState({ acao: !this.state.acao });
  };

  onChangeSciFi = (event) => {
    this.setState({ scifi: !this.state.scifi });
  };

  handleRenderMovies = () => {
    this.setState({ renderMovies: !this.state.renderMovies });
    console.log(this.state.renderMovies);
  };

  onChangeDrama = (event) => {
    this.setState({ drama: !this.state.drama });
  };

  onChangeComedia = (event) => {
    this.setState({ comedia: !this.state.comedia });
  };
  render() {
    const screen = this.state.renderMovies ? (
      <MoviesResult
        backButton={() => this.handleRenderMovies()}
        stateSuspense={this.state.suspense}
        stateDrama={this.state.drama}
        stateTerror={this.state.terror}
      />
    ) : (
      <MuiThemeProvider theme={MyTheme}>
        <Background>
          <Headline>
            {" "}
            Marque quais estilos e gêneros de filmes você se interessa
          </Headline>
          <GenreContainer>
            <BotaoEstiloGenero
              genero="🔪 Suspense"
              value={this.state.suspense}
              onChange={this.onChangeSuspense}
              color={"primary"}
            />
            <BotaoEstiloGenero
              genero="👻 Terror"
              value={this.state.terror}
              onChange={this.onChangeTerror}
            />
            <BotaoEstiloGenero
              genero="💥 Ação"
              value={this.state.acao}
              onChange={this.onChangeAcao}
            />
            <BotaoEstiloGenero
              genero="😭 Drama"
              value={this.state.drama}
              onChange={this.onChangeDrama}
            />
            <BotaoEstiloGenero
              genero="🚀 Ficção Científica"
              value={this.state.scifi}
              onChange={this.onChangeDrama}
            />
            <BotaoEstiloGenero
              genero="😂 Comédia"
              value={this.state.comedia}
              onChange={this.onChangeComedia}
            />
            <BotaoEstiloGenero
              genero="🦁 Animação"
              value={this.state.comedia}
              onChange={this.onChangeComedia}
            />
          </GenreContainer>
          <Button
            variant={"contained"}
            onClick={this.handleRenderMovies}
            color={"primary"}
            size={"large"}
          >
            Ver Minhas Indicações
          </Button>
        </Background>
      </MuiThemeProvider>
    );

    return <div>{screen}</div>;
  }
}

export default EstilosEGeneros;
