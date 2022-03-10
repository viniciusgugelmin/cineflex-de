import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Base/Header";
import { Home } from "../templates/Home";
import { useEffect, useState } from "react";
import { Page } from "../components/Base/Page";
import { Title } from "../components/Base/Title";
import { MovieSchedules } from "../templates/MovieSchedules";
import { Footer } from "../components/Base/Footer";
import { MovieSection } from "../templates/MovieSection";
import { MovieTicket } from "../templates/MovieTicket";

export const App = () => {
  const [title, setTitle] = useState("");
  const [titleStyle, setTitleStyle] = useState({});
  const [movie, setMovie] = useState({});
  const [section, setSection] = useState({});

  useEffect(() => {
    document.title = `${process.env.REACT_APP_PROJECT_NAME} - ${title}`;
  }, [title]);

  return (
    <BrowserRouter>
      <Header />
      <Page hasFooter={!!movie.title} setTitleStyle={setTitleStyle}>
        <Title title={title} titleStyle={titleStyle} />
        <Routes>
          <Route
            path="/"
            element={<Home setTitle={setTitle} setMovie={setMovie} />}
          />
          <Route
            path="/filme/:id"
            element={
              <MovieSchedules
                setTitle={setTitle}
                setMovie={setMovie}
                setSection={setSection}
                {...movie}
              />
            }
          />
          <Route
            path="/sessao/:id"
            element={
              <MovieSection
                setTitle={setTitle}
                {...movie}
                {...section}
                setMovie={setMovie}
                setSection={setSection}
              />
            }
          />
          <Route
            path="/sucesso"
            element={
              <MovieTicket
                setTitle={setTitle}
                setMovie={setMovie}
                setSection={setSection}
              />
            }
          />
        </Routes>
      </Page>
      {movie.title && <Footer {...movie} {...section} />}
    </BrowserRouter>
  );
};
