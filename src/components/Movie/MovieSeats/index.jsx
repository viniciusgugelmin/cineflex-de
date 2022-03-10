import styled from "styled-components";
import P from "prop-types";
import { MovieSeatButton } from "../MovieSeatButton";

export const MovieSeats = ({ seats, seatsSelected, setSeatsSelected }) => {
  const selectSeat = (seat) => {
    if (!seat.isAvailable) return;

    if (seatsSelected.includes(seat.id)) {
      setSeatsSelected((prevSeatsSelected) => [
        ...prevSeatsSelected.filter((id) => id !== seat.id),
      ]);
      return;
    }

    setSeatsSelected((prevSeatsSelected) => [...prevSeatsSelected, seat.id]);
  };

  return (
    <MovieSeatsEl>
      {seats.map((seat) => (
        <MovieSeatButton
          key={seat.id}
          disabled={!seat.isAvailable}
          selected={seatsSelected.includes(seat.id)}
          handleClick={() => selectSeat(seat)}
          text={(parseInt(seat.name) < 10 ? "0" : "") + seat.name}
        />
      ))}
    </MovieSeatsEl>
  );
};

MovieSeats.propTypes = {
  seats: P.array.isRequired,
  seatsSelected: P.array.isRequired,
  setSeatsSelected: P.func.isRequired,
};

const MovieSeatsEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  max-width: 100%;
  flex-wrap: wrap;
  margin-bottom: 16px;
  min-height: 158px;
`;
