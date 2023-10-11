import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "react-spinner-material";
import { styled } from "styled-components";

const Input = () => {
  


  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    e.preventDefault();
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      navigate("input");
    }, 3000);
  };
  console.log(Input);
  return (
    <div>
      {spinner && (
        <Spinner
          radius={70}
          color={"#333"}
          stroke={2}
          visible={true}
          style={{ margin: "auto", marginTop: "15%" }}
        />
      )}

      {!spinner && (
        <InputStyle>

          <InpStyle type="email" name="login" placeholder="Email :" />
          <InpStyle type="password" name="pass" placeholder="Parol :" />

          <ButStyle onClick={onClickHandler}>ВОЙТИ</ButStyle>

          <Outlet />
        </InputStyle>
      )}
    </div>
  );
};

export default Input;

const ButStyle = styled.button`
  width: 140px;
  height: 35px;
  border-radius: 10px;
  font-size: 25px;
  margin-top: 35px;
  background-color: gold;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
  &:active {
    background-color: green;
  }
`;
const InpStyle = styled.input`
  width: 170px;
  height: 35px;
  border-radius: 6px;
  margin-top: 25px;
`;
const InputStyle = styled.div`
  width: 255px;
  height: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  background-color: gold;
  border-radius: 10px;
`;
