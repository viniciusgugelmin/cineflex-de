import styled from "styled-components";
import P from "prop-types";
import { Link } from "react-router-dom";

export const MovieCard = ({ id, posterURL, title }) => {
  return (
    <MovieCardEl to={`/filme/${id}`}>
      <img src={posterURL} alt={title} />
    </MovieCardEl>
  );
};

MovieCard.propTypes = {
  id: P.number.isRequired,
  posterURL: P.string.isRequired,
  title: P.string.isRequired,
};

const MovieCardEl = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 209px;
  background-color: white;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 8px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
