import React from "react";
import Gallery from "../components/gallery";
import { MainContent } from "../styled-components/containers";

const Home = () => {
  return (
    <>
      <MainContent scrollable>
        <div className="styled-home">
          <Gallery />
        </div>
      </MainContent>
    </>
  );
};

export default Home;
