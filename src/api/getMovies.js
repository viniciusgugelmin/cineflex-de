import axios from "axios";

export const getMovies = async () => {
  const request = await axios.get(`${process.env.REACT_APP_API_URL}/movies`);

  return await request.data;
};
