import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function HedersStle() {
  return (
    <DivStylee>
      <Link>
        <button>НАЗАД</button>
      </Link>
    </DivStylee>
  );
}

export default HedersStle;

const DivStylee = styled.div`
  width: 200px;
  height: 500px;
`;
