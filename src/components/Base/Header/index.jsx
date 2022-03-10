import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderEl>
      <LinkEl to="/">CINEFLEX</LinkEl>
    </HeaderEl>
  );
};

const HeaderEl = styled.header`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
  background-color: #c3cfd9;
`;

const LinkEl = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #e8833a;
  font-size: 34px;
  line-height: 40px;
`;
