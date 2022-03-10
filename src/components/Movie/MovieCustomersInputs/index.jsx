import styled from "styled-components";
import P from "prop-types";
import { Input } from "../../Base/Input";

export const MovieCustomersInputs = ({
  customerName,
  setCustomerName,
  customerId,
  setCustomerId,
}) => {
  return (
    <MovieCustomersInputsEl>
      <Input
        name="customerName"
        placeholder="Digite seu nome..."
        label="Nome do comprador:"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <Input
        name="customerId"
        placeholder="Digite seu CPF..."
        label="CPF do comprador:"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
    </MovieCustomersInputsEl>
  );
};

MovieCustomersInputs.propTypes = {
  customerName: P.string,
  setCustomerName: P.func,
  customerId: P.string,
  setCustomerId: P.func,
};

const MovieCustomersInputsEl = styled.div`
  margin-bottom: 50px;
`;
