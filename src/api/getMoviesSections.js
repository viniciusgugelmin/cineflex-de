import axios from "axios";

export const getMoviesSections = async (id) => {
  const request = await axios.get(
    `${process.env.REACT_APP_API_URL}/movies/${id}/showtimes`
  );

  return await request.data;
};
