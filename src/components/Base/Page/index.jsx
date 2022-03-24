import styled from "styled-components";
import P from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Page = ({ children, hasFooter, setTitleStyle }) => {
  const router = useNavigate();
  //console.log(router);

  useEffect(() => {
    if (router.pathname === "/sucesso") {
      setTitleStyle({
        color: "#247A6B",
        maxWidth: "185px",
        fontWeight: "bold",
      });
      return;
    }

    localStorage.removeItem("movie");
    localStorage.removeItem("seatsSelected");
    localStorage.removeItem("customer");
    setTitleStyle({});
  }, [router.pathname]);

  return <PageEl hasFooter={hasFooter}>{children}</PageEl>;
};

Page.propTypes = {
  children: P.node.isRequired,
  hasFooter: P.bool,
  setTitleStyle: P.func.isRequired,
};

const PageEl = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => (props.hasFooter ? "186px" : "67px")});
  padding: 30px 25px;
`;
