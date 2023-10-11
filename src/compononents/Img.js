import React from "react";
import { styled } from "styled-components";

function Img() {
  return (
    <div>
      <ImgStyle
        src="https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-File.png"
        alt=""
      />
    </div>
  );
}

export default Img;

const ImgStyle = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 50px;
`;
