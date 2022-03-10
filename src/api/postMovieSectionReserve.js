import axios from "axios";

export const postMovieSectionReserve = async ({ ids, name, cpf }) => {
  if (!ids || ids.length === 0 || !name || !cpf) {
    alert("Preencha todos os campos");
    return false;
  }

  const request = await axios.post(
    `${process.env.REACT_APP_API_URL}/seats/book-many`,
    {
      ids,
      name,
      cpf,
    }
  );

  return await request.data;
};
