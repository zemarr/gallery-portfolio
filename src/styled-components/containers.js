import styled from "styled-components";

export const StyledApp = styled.div`
  position: relative;
  display: flex;
  max-height: 100vh;
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

export const StyledLogo = styled.div`
  font-size: 27px;
  width: fit-content;
`;

export const StyledHome = styled.section`
  overflow-y: auto;
  scroll-behavior: smooth;
  /* padding: 0 50px; */
  height: inherit;

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;
