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
    grid-template-columns: 32% 32% 32%;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 443px) {
    grid-template-columns: 30% 30% 30%;
    gap: 5px;
  }

  .pics {
    transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    height: 300px;
    max-height: 100%;
    /* border-radius: 8px; */
    z-index: 50;

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 200px;
    }
    @media screen and (max-width: 443px) {
      width: 100%;
      height: 150px;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
      height: 100px;
    }
    @media screen and (max-width: 320px) {
      width: 90px;
      height: 90px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);

    }

    :hover {
      border-radius: 36px;

      img {
        transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);
        opacity: 1.5;
        transform: scale(1.05);
      }
    }

  }
`;
