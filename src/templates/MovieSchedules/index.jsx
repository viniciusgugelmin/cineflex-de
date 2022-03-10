import styled from "styled-components";
import P from "prop-types";
import { useEffect } from "react";
import { getMoviesSections } from "../../api/getMoviesSections";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Base/Button";

export const MovieSchedules = ({ setTitle, setMovie, setSection, days }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    let movieLoaded = {};
    let error = false;

    try {
      movieLoaded = await getMoviesSections(id);
    } catch (e) {
      error = true;
    }

    if (error || !movieLoaded.days || movieLoaded.days === 0) {
      navigate("/");
      return;
    }

    setTitle("Selecione o horário");
    setMovie({ ...movieLoaded });
    setSection({});
  }, []);

  const goToSession = (sessionId) => {
    navigate(`/sessao/${sessionId}`);
  };

  return (
    <MovieSchedulesEl>
      {days &&
        days.map((day) => (
          <section key={day.id}>
            <h1>
              {day.weekday} - {day.date}
            </h1>
            <MovieSheduleButtonsContainer>
              {day.showtimes.map((showtime) => (
                <Button
                  key={showtime.id}
                  text={showtime.name}
                  handleClick={() => goToSession(showtime.id)}
                  theme="movie-schedule"
                />
              ))}
            </MovieSheduleButtonsContainer>
          </section>
        ))}
    </MovieSchedulesEl>
  );
};

MovieSchedules.propTypes = {
  setTitle: P.func.isRequired,
  setMovie: P.func.isRequired,
  setSection: P.func.isRequired,
  days: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      weekday: P.string.isRequired,
      date: P.string.isRequired,
      showtimes: P.arrayOf(
        P.shape({
          id: P.number.isRequired,
          name: P.string.isRequired,
        })
      ),
    })
  ),
};

const MovieSchedulesEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  max-width: 100%;
  width: 325px;
  margin: 0 auto;

  h1 {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`;

const MovieSheduleButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 100%;
`;
