import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Html from "./Html";

const Heder = () => {
  return (
    <div>
      <DivStyle>
        <Html />
        <Link to="react">
          <ButStyle>Регистр</ButStyle>
        </Link>
      </DivStyle>
      <Outlet />
    </div>
  );
};

export default Heder;

const DivStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;
  background-color: goldenrod;
`;

const ButStyle = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 8px;
  background-color: gold;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;
