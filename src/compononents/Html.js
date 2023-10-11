import React from "react";
import { styled } from "styled-components";

function Html() {
  return (
    <div>
      <DiStyle>IT-DOOR</DiStyle>
    </div>
  );
}

export default Html;

const DiStyle = styled.div`
  width: 100px;
  height: 50px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  background-color: gold;
`;
