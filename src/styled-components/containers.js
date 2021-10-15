import styled from "styled-components";

export const StyledApp = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
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

export const StyledLogo = styled.div`
  font-size: 27px;
  width: fit-content;

  h4 {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const StyledHome = styled.section`
  height: calc(100vh - 80px);
  width: 80%;
  overflow-y: auto;
`;

export const MainContent = styled.div`
  height: calc(100vh - 80px);
  max-width: 77%;
  overflow-y: ${({scrollable}) => (scrollable ? "auto" : "")};

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
