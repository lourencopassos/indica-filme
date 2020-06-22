import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundSlider from "react-background-slider";
import image1 from "../img/1.png";
import image2 from "../img/2.png";
import image3 from "../img/3.png";
import image4 from "../img/4.png";

const Container = styled.div`
  background: #fff;
  height: 44vw;
  width: 100vh;
  padding: 40px;
`;

const Cartaz = styled.img`
  width: 30%;
`;
const MovieInfo = styled.div`
  float: right;
`;

const Headline = styled.h1`
  font-size: 6vh;
  color: #282c34;
`;

class MoviesResult extends Component {
  state = {
    filmes: [
      {
        nome: "Hereditário",
        disponivel: "HBO",
        avaliacao: 5,
        sinopse:
          "Após a morte da reclusa avó, a família Graham começa a desvendar algumas coisas. Mesmo após a partida da matriarca, ela permanece como se fosse uma sombra sobre a família, especialmente sobre a solitária neta adolescente, Charlie, por quem ela sempre manteve uma fascinação não usual. Com um crescente terror tomando conta da casa, a família explora lugares mais escuros para escapar do infeliz destino que herdaram.",
        porqueIndicacao:
          "O filme é um grande exemplo de filme de terror que aterroriza sem jumpscares. Tu passa o filme inteiro esperando o susto, o que acaba te deixando em um estado permanente de ansiedade.",
        genero: "terror",
        trailer: "https://www.youtube.com/watch?v=Ui13PlmyZhQ",
        tags: ["Impactante", "Pesadelo Garantido", "Clássico"],
        cartaz:
          "https://cinemacomnerdice.files.wordpress.com/2018/06/hereditary.jpg",
        classificacao: 16,
      },
      {
        nome: "Harry Potter",
        disponivel: "Amazon Prime",
        avaliacao: 5,
        porqueIndicacao: "Filme clássico e nostálgico.",
        genero: "drama",
      },
      {
        nome: "Iluminado",
        disponivel: "HBO",
        avaliacao: 5,
        sinopse:
          "Após a morte da reclusa avó, a família Graham começa a desvendar algumas coisas. Mesmo após a partida da matriarca, ela permanece como se fosse uma sombra sobre a família, especialmente sobre a solitária neta adolescente, Charlie, por quem ela sempre manteve uma fascinação não usual. Com um crescente terror tomando conta da casa, a família explora lugares mais escuros para escapar do infeliz destino que herdaram.",
        porqueIndicacao:
          "O filme é um grande exemplo de filme de terror que aterroriza sem jumpscares. Tu passa o filme inteiro esperando o susto, o que acaba te deixando em um estado permanente de ansiedade.",
        genero: "terror",
        trailer: "https://www.youtube.com/watch?v=Ui13PlmyZhQ",
        tags: ["Impactante", "Pesadelo Garantido", "Clássico"],
        cartaz:
          "https://cinemacomnerdice.files.wordpress.com/2018/06/hereditary.jpg",
        classificacao: 16,
      },
    ],
    suspense: this.props.stateSuspense,
    terror: this.props.stateTerror,
    drama: this.props.stateDrama,
    moviesIndications: [],
  };

  render() {
    let settings = {
      dots: true,
    };

    let movieList = this.state.filmes;
    let filmesFiltrados = [];
    let numeroDeFilmes = filmesFiltrados.length;

    if (this.state.suspense === true) {
      filmesFiltrados = filmesFiltrados.concat(
        movieList.filter((filme) => filme.genero === "suspense")
      );
    }
    if (this.state.drama === true) {
      filmesFiltrados = filmesFiltrados.concat(
        movieList.filter((filme) => filme.genero === "drama")
      );
    }
    if (this.state.terror === true) {
      filmesFiltrados = filmesFiltrados.concat(
        movieList.filter((filme) => filme.genero === "terror")
      );
    }

    const renderTamanhoListaFilmes = filmesFiltrados.length ? (
      <div>
        <p>Número de indicações: {filmesFiltrados.length}</p>
      </div>
    ) : (
      <div></div>
    );

    console.log(filmesFiltrados.length);
    return (
      <div>
        <Container>
          <Headline>Lista de indicações</Headline>
          {renderTamanhoListaFilmes}
          <Slider {...settings}>
            {filmesFiltrados.map((movie) => {
              return (
                <div>
                  <div>
                    <Cartaz src={movie.cartaz} alt={movie.nome} />
                  </div>
                  <div>
                    {movie.tags.map((tag) => {
                      return <p>{tag}</p>;
                    })}
                  </div>
                  {console.log(movie.tags)}
                  <MovieInfo>
                    <p>
                      <strong>{movie.nome}</strong>
                    </p>
                    <p>
                      {movie.avaliacao}
                      {"⭐"}
                      <span>
                        {" - "}
                        {movie.classificacao}
                        {" anos"}
                      </span>
                    </p>

                    <p>{movie.sinopse}</p>
                  </MovieInfo>
                </div>
              );
            })}
          </Slider>
          <button onClick={this.props.backButton}>Voltar</button>
        </Container>
        <BackgroundSlider
          images={[image1, image2, image3, image4]}
          duration={7}
          transition={1}
        />
      </div>
    );
  }
}

export default MoviesResult;
