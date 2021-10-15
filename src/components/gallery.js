import React from "react";
import img1 from "../img/TONI&JAY-5881.jpg";
import img2 from "../img/IMG_0092.jpg";
import img3 from "../img/IMG_0042.JPG";
import img4 from "../img/IMG_5416-opt.jpg";
import img5 from "../img/IMG_2833_2.jpg";
import img6 from "../img/IMG_2500.JPG";
import img7 from "../img/IMG_1023-opt.jpg";
import img8 from "../img/IMG_2038-opt.jpg";
import img9 from "../img/IMG_3866.JPG";
import { StyledGallery } from "../styled-components/styledGallery";
import { useState } from "react";
import { StyledModal } from "../styled-components/modal";
import { Close } from "@material-ui/icons";

const data = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
  {
    id: 4,
    imgSrc: img4,
  },
  {
    id: 5,
    imgSrc: img5,
  },
  {
    id: 6,
    imgSrc: img6,
  },
  {
    id: 7,
    imgSrc: img7,
  },
  {
    id: 8,
    imgSrc: img8,
  },
  {
    id: 9,
    imgSrc: img9,
  }
];

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <StyledModal className={modal ? "campmodal open" : "campmodal"}>
        <div onClick={() => setModal(false)}>
          <Close
            style={{
              color: "white",
              height: "40px",
              width: "40px",
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          />
        </div>
        <img src={tempImgSrc} alt="" />
      </StyledModal>
      <StyledGallery className="gallery-container">
        {data.map((item, index) => (
          <>
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            </div>
          </>
        ))}
      </StyledGallery>
    </>
  );
};

export default Gallery;
