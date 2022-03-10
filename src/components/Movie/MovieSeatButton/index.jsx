import styled from "styled-components";
import P from "prop-types";

export const MovieSeatButton = ({ disabled, selected, handleClick, text }) => {
  return (
    <MovieSeatButtonEl
      toShow={text}
      disabled={disabled}
      selected={selected}
      onClick={handleClick}
    >
      {text}
    </MovieSeatButtonEl>
  );
};

MovieSeatButton.propTypes = {
  disabled: P.bool.isRequired,
  selected: P.bool.isRequired,
  handleClick: P.func,
  text: P.string,
};

const MovieSeatButtonEl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  min-height: 26px;
  min-width: 26px;
  max-height: 26px;
  max-width: 26px;
  padding: 0;
  font-weight: normal;
  font-size: 11px;
  transition: opacity 0.2s ease-in-out;

  &:disabled {
    color: black;
    cursor: default !important;
    background: #fbe192;
    border: 1px solid #f7c52b;
  }

  ${(props) =>
    props.selected
      ? `
      background: #8DD7CF;
      border: 1px solid #45BDB0;
      `
      : ""}

  ${(props) =>
    props.toShow
      ? `
        cursor: pointer;
        
        &:not(:disabled):hover {
          opacity: 0.8;
        }`
      : ""}
`;
