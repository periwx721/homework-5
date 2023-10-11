import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const arr = [
  {
    name: "STITCH",
    info: "Стич (англ. Stitch — «стежок») — имя генетического эксперимента 626, главный персонаж франшизы «Лило и Стич». Стич — придуманный инопланетянин, изначально созданный чтобы создавать большой хаос в галактике и разных городах.",
    img: "https://i.pinimg.com/originals/56/45/dc/5645dc64a5b4d534b63031bf725da53d.png",
    id: "stitch",
  },
  {
    name: "ELEMENTAL",
    info: "Идея мультфильма — «представьте, что расы — это стихии». Но даже ее потенциал не раскрывается полностью. Картина могла бы наделить элементы характерными чертами разных народов или культур и показать, как они взаимодействуют друг с другом.",
    img: "https://tlum.ru/uploads/109584548351f3d45aee5e993cd660639eea78dc4bec9ff250767be1fd6af655.jpeg",
    id: "elemental",
  },
  {
    name: "ЦАРЕВНЫ",
    info: "Каждая из них – Царевна Варвара-Краса Длинная Коса, Василиса Царевна-Лягушка, Дарья – Царевна-Несмеяна, Царевна Елена Прекрасная и Спящая Царевна Соня – обладает удивительной магической силой, но пока не умеет ей управлять.",
    img: "https://static.hdrezka.ac/i/2021/11/18/sd8f6aa968006vl30t31q.png",
    id: "царевны",
  },
  {
    name: "JS",
    id: "s4",
  },
];
function MalyMat() {
  return (
    <>
      <DivStyle>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <H1Stle>HOME</H1Stle>
        </Link>
      </DivStyle>

      <div className="heder">
        {arr.map((el) => (
          <Link to={el.id}>
            <h1>{el.name}</h1>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default MalyMat;

const DivStyle = styled.div`
  height: 700px;
  width: 20%;
  position: fixed;
  background-color: gray;
  border-radius: 10px;
  margin-left: 30px;
`;
const H1Stle = styled.h1`
  width: 130px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: gold;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  &:hover {
    background-color: blue;
    color: azure;
  }
  &:active {
    background-color: green;
  }
`;
