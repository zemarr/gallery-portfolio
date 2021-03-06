import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledApp = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .d-flex {
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
      justify-content: center;
    }
  }
`;

export const StyledContainer = styled.div`
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;

  @media screen and (max-width: 1340px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 375px) {
    padding: 0 16px;
  }
`;

export const StyledColumn = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const StyledRow = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const StyledLogo = styled(Link)`
  font-size: 27px;
  color: var(--font-color);
  text-decoration: none !important;
  width: fit-content;

  :hover {
    color: inherit;
  }

  h4 {
    font-weight: 600;
    font-size: 20px !important;
    margin: 0;
  }
`;

export const StyledHome = styled.section`
  height: calc(100vh - 80px);
  width: 80%;
  overflow-y: auto;
`;

export const MainContent = styled.div`
  height: calc(100vh - 50px);
  min-width: 77%;
  max-width: 77%;
  overflow-y: ${({ scrollable }) => (scrollable ? "auto" : "")};
  margin-top: 50px;
  scrollbar-width: thin;

  :hover {
    ::-webkit-scrollbar-thumb {
      transition: 1.4s cubic-bezier(0.42, 0.01, 0, 1.04);
      border-radius: 50px !important;
      background-color: var(--font-color) !important;
      visibility: visible !important;
      /* border-radius: 50px; */
    }
  }

  ::-webkit-scrollbar {
    width: 3px !important;
  }

  ::-webkit-scrollbar-track {
    border-radius: 50px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1) !important;
    border-radius: 50px !important;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    transition: 1.4s cubic-bezier(0.42, 0.01, 0, 1.04);
    background-color: var(--font-color) !important;
    visibility: hidden !important;
    /* border-radius: 50px; */
  }

  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    padding-bottom: 80px;
    margin-top: 0;
  }

  .styled-bio {
    @media screen and (max-width: 768px) {
      height: inherit;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-width: thin;
      padding-bottom: 100px;
    }
  }
`;
