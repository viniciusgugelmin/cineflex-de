import axios from "axios";

export const getMovieSection = async (id) => {
  const request = await axios.get(
    `${process.env.REACT_APP_API_URL}/showtimes/${id}/seats`
  );

  return await request.data;
};
