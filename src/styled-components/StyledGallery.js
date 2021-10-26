import styled from "styled-components";

export const StyledGallery = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 2060px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 30% 30% 30%;
  gap: 10px;
  row-gap: 10px;
  padding-bottom: 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 26% 26% 26%;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 443px) {
    /* grid-template-columns: 30% 30% 30%; */
    gap: 5px;
  }

  .pics {
    transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);
    cursor: pointer;
    /* margin-right: 6px;
    margin-bottom: 6px; */
    overflow: hidden;
    border-radius: 25px;
    width: 100%;
    max-width: 100%;
    height: 300px;
    max-height: 100%;
    max-height: 100%;

    @media screen and (max-width: 1024px) {
      width: 200px;
      height: 200px;
    }
    @media screen and (max-width: 443px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width: 425px) {
      width: 100px;
      height: 100px;
    }
    @media screen and (max-width: 320px) {
      width: 90px;
      height: 90px;
    }

    :hover {
      filter: opacity(0.9);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
