import styled from "styled-components";
import { MovieSeatButton } from "../MovieSeatButton";

export const MovieSeatInstructionsButtons = () => {
  const seatOptions = ["Selecionado", "Disponível", "Indisponível"];

  return (
    <MovieSeatInstructionsButtonsEl>
      {seatOptions.map((seatOption, index) => (
        <MovieSeatInstructionButton key={index}>
          <MovieSeatButton
            selected={index === 0}
            disabled={index === seatOptions.length - 1}
          />
          {seatOption}
        </MovieSeatInstructionButton>
      ))}
    </MovieSeatInstructionsButtonsEl>
  );
};

const MovieSeatInstructionsButtonsEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const MovieSeatInstructionButton = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #4e5a65;
`;
