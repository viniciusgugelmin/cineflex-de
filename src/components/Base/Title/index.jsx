import styled from "styled-components";
import P from "prop-types";

export const Title = ({ title, titleStyle }) => {
  return <TitleEl style={titleStyle}>{title}</TitleEl>;
};

Title.propTypes = {
  title: P.string.isRequired,
  titleStyle: P.object,
};

const TitleEl = styled.h1`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #293845;
  min-height: 28px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
