import React, { Component } from "react";
import EstouBuscando from "./components/EstouBuscando";
import EstilosEGeneros from "./components/EstilosEGeneros";
import styled from "styled-components";
import BackgroundSlider from "react-background-slider";
import BoasVindasCard from "./components/BoasVindasCard";
import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";
import MoviesResult from "./components/MoviesResult";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = {
    etapa: 1,
  };

  handleRenderMovieOrSerie = () => {
    this.setState({ etapa: 2 });
  };
  handleMoviesResult = () => {
    this.setState({ etapa: 3 });
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return (
          <div>
            <BoasVindasCard
              handleRenderMovieOrSerie={() => this.handleRenderMovieOrSerie()}
            />
            <BackgroundSlider
              images={[image1, image2, image3, image4]}
              duration={4}
              transition={1}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <EstilosEGeneros />
            {/* <BackgroundSlider
              images={[image1, image2, image3, image4]}
              duration={7}
              transition={1}
            /> */}
          </div>
        );
      default:
        return null;
    }
  };
  render() {
    return <AppContainer>{this.renderizaEtapa()}</AppContainer>;
  }
}

export default App;
