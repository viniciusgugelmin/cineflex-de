import styled from "styled-components";
import P from "prop-types";

export const Input = ({ name, label, placeholder, value, onChange }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputEl
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  name: P.string.isRequired,
  label: P.string.isRequired,
  placeholder: P.string.isRequired,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};

const Label = styled.label`
  display: block;
  color: #293845;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

const InputEl = styled.input`
  display: block;
  width: 100%;
  height: 51px;
  border-radius: 3px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  padding-left: 15px;
  font-size: 18px;
  margin-bottom: 7px;

  &::placeholder {
    color: #afafaf;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
`;
