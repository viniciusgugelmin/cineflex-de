import styled from "styled-components";
import { useEffect, useState } from "react";
import P from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Base/Button";

export const MovieTicket = ({ setTitle, setMovie, setSection }) => {
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Pedido feito com sucesso");
    setMovie({});
    setSection({});

    let cachedMovie = localStorage.getItem("movie");
    let cachedSeats = localStorage.getItem("seatsSelected");
    let cachedCustomer = localStorage.getItem("customer");

    if (!cachedMovie || !cachedSeats || !cachedCustomer) {
      navigate("/");
      return;
    }

    setTicket({
      movie: JSON.parse(cachedMovie),
      seats: JSON.parse(cachedSeats),
      customer: JSON.parse(cachedCustomer),
    });
  }, []);

  const goToHome = () => {
    setTitle("");
    navigate("/");
  };

  return (
    <MovieTicketEl>
      {ticket && (
        <>
          <div>
            <h2>Filme e Sessão</h2>
            <p>{ticket.movie.title}</p>
            <p>
              {ticket.movie.date} {ticket.movie.time}
            </p>
          </div>

          <div>
            <h2>Ingressos</h2>
            {ticket.seats.map((seat) => (
              <p key={seat}>Assento {seat}</p>
            ))}
          </div>

          <div>
            <h2>Comprador</h2>
            <p>Nome: {ticket.customer.name}</p>
            <p>CPF: {ticket.customer.cpf}</p>
          </div>

          <Button
            handleClick={goToHome}
            text="Voltar pra Home"
            theme="movie-ticket"
          />
        </>
      )}
    </MovieTicketEl>
  );
};

MovieTicket.propTypes = {
  setTitle: P.func.isRequired,
  setMovie: P.func.isRequired,
  setSection: P.func.isRequired,
};

const MovieTicketEl = styled.div`
  max-width: 375px;
  margin: 0 auto;

  div {
    margin-bottom: 40px;
  }

  h2 {
    letter-spacing: 0.04em;
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 5px;
  }

  p {
    letter-spacing: 0.04em;
    color: #293845;
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 5px;
  }
`;
