import styled from "styled-components";
import P from "prop-types";

export const Footer = ({ posterURL, title, weekday, time }) => {
  const hasSection = !!(weekday && time);

  return (
    <FooterEl>
      <FooterContainer title={title}>
        <FooterPoster src={posterURL} alt={title} />
        <FooterTitleContainer>
          <FooterTitle>{title}</FooterTitle>
          {hasSection && (
            <FooterSubtitle>
              {weekday} - {time}
            </FooterSubtitle>
          )}
        </FooterTitleContainer>
      </FooterContainer>
    </FooterEl>
  );
};

Footer.propTypes = {
  posterURL: P.string.isRequired,
  title: P.string.isRequired,
  weekday: P.string,
  time: P.string,
};

const FooterEl = styled.footer`
  position: sticky;
  bottom: 0;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  min-height: 119px;
  width: 100%;
`;

const FooterContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: help;
`;

const FooterPoster = styled.img`
  background: white;
  min-width: 64px;
  max-width: 64px;
  min-height: 89px;
  max-height: 89px;
  padding: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

const FooterTitleContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FooterTitle = styled.h1`
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #293845;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FooterSubtitle = styled.h2`
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #293845;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
