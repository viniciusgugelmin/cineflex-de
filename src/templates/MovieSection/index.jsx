import styled from "styled-components";
import { useEffect, useState } from "react";
import P from "prop-types";
import { getMovieSection } from "../../api/getMovieSection";
import { useNavigate, useParams } from "react-router-dom";
import { MovieSeats } from "../../components/Movie/MovieSeats";
import { MovieSeatInstructionsButtons } from "../../components/Movie/MovieSeatInstructionsButtons";
import { Button } from "../../components/Base/Button";
import { postMovieSectionReserve } from "../../api/postMovieSectionReserve";
import { MovieCustomersInputs } from "../../components/Movie/MovieCustomersInputs";

export const MovieSection = ({
  setTitle,
  setMovie,
  setSection,
  title,
  date,
  name,
}) => {
  const [seats, setSeats] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    let error = false;
    let seatsLoaded = [];

    try {
      seatsLoaded = await getMovieSection(id);
    } catch (e) {
      error = true;
    }

    if (error) {
      useNavigate("/");
      return;
    }

    setTitle("Selecione o(s) assento(s)");
    setMovie({ ...seatsLoaded.movie });
    setSection({ ...seatsLoaded.day, time: seatsLoaded.name });
    setSeats([...seatsLoaded.seats]);
  }, []);

  const reserveSection = async () => {
    if (seatsSelected.length === 0) {
      alert("Selecione pelo menos um assento");
      return;
    }

    const createSectionReserve = await postMovieSectionReserve({
      ids: [...seatsSelected],
      name: customerName,
      cpf: customerId,
    });

    const seatsName = seats
      .filter((seat) => seatsSelected.includes(seat.id))
      .map((seat) => seat.name);

    localStorage.setItem("movie", JSON.stringify({ title, date, time: name }));
    localStorage.setItem("seatsSelected", JSON.stringify(seatsName));
    localStorage.setItem(
      "customer",
      JSON.stringify({ name: customerName, cpf: customerId })
    );

    if (!createSectionReserve) return;

    navigate("/sucesso");
  };

  return (
    <MovieSectionEl>
      <MovieSeats
        seats={seats}
        seatsSelected={seatsSelected}
        setSeatsSelected={setSeatsSelected}
      />
      <MovieSeatInstructionsButtons />
      <MovieCustomersInputs
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerId={customerId}
        setCustomerId={setCustomerId}
      />
      <Button
        handleClick={reserveSection}
        text="Reservar assento(s)"
        theme="movie-reserve"
      />
    </MovieSectionEl>
  );
};

MovieSection.propTypes = {
  setTitle: P.func.isRequired,
  setMovie: P.func.isRequired,
  setSection: P.func.isRequired,
  title: P.string,
  date: P.string,
  name: P.string,
};

const MovieSectionEl = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 325px;
  margin: 0 auto;
`;
