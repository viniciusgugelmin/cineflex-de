import { MovieCard } from "../../components/Movie/MovieCard";
import { getMovies } from "../../api/getMovies";
import styled from "styled-components";
import { useEffect, useState } from "react";
import P from "prop-types";

export const Home = ({ setTitle, setMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    setMovie({});

    const moviesLoaded = await getMovies();
    let title = "Descula 😢 sem filmes por enquanto";

    setMovies(moviesLoaded);

    if (moviesLoaded && moviesLoaded.length > 0) {
      title = "Selecione o filme";
    }

    setTitle(title);
  }, []);

  return (
    <Movies>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Movies>
  );
};

Home.propTypes = {
  setTitle: P.func.isRequired,
  setMovie: P.func.isRequired,
};

const Movies = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  width: 325px;
  margin: 0 auto;
  gap: 11px;
`;
