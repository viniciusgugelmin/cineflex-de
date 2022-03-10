import styled from "styled-components";
import P from "prop-types";

export const Button = ({ text, handleClick, theme }) => {
  return (
    <ButtonEl onClick={handleClick} theme={theme}>
      {text}
    </ButtonEl>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  handleClick: P.func.isRequired,
  theme: P.string,
};

const ButtonEl = styled.button`
  background: #e8833a;
  border-radius: 3px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme }) =>
    theme === "movie-schedule" &&
    `
      min-width: 83px;
      max-width: 83px;
      min-height: 43px;
      max-height: 43px;
    `}

  ${({ theme }) =>
    (theme === "movie-reserve" || theme === "movie-ticket") &&
    `
      min-width: 225px;
      max-width: 225px;
      min-height: 42px;
      max-height: 42px;
      margin: auto;
    `}
`;
