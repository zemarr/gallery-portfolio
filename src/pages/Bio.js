import React from "react";
import BioDetails from "../components/bioDetails";
import { MainContent } from "../styled-components/containers";

const Bio = () => {
  return (
    <>
      <MainContent>
        <div className="styled-bio">
          <BioDetails />
        </div>
      </MainContent>
    </>
  );
};

export default Bio;
