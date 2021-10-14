import React from "react";
import Gallery from "../components/gallery";
import { StyledContainer, StyledHome } from "../styled-components/containers";

const Home = () => {
  return (
    <>
      <StyledHome className="styled-home">
        <Gallery />
      </StyledHome>
    </>
  );
};

export default Home;
