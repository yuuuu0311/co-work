import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Arrow = styled.svg`
  position: absolute;
  top: -18%;
  left: 50%;
  height: 50px;
  width: 50px;

  z-index: 20;
  color: #966565;
  transform: rotate(90deg) translate(50%, 50%);
`;

const Dialog = styled.ul`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background-color: #f8f3f2;
  }
  &:nth-child(odd) {
    background-color: #a07e61;
  }
`;

const Item = styled.li`
  width: 150px;
  height: 150px;
  position: absolute;
  transform-origin: right bottom;
  background-color: ${({ $index, $prize }) =>
    $index % $prize === 0 ? "red" : "white"};
  transform: ${({ $index, $prize }) =>
    `rotate(${($index * 360) / $prize + 10}deg) skew(${
      90 - 360 / $prize
    }deg, 0)`};
`;

const ItemsWord = styled.p`
  position: absolute;
  top: 90%;
  left: 30%;
  transform-origin: center center;
  transform: ${({ $index, $prize }) =>
    ` translate(-20%, -70%) rotate(10deg)  skew(-${90 - 360 / $prize}deg, 0)`};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #070707;
  font-size: 16px;
  text-align: center;
`;

const StartBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #402c2c;
  cursor: pointer;
  z-index: 10;
`;

const prizeDatas = [
  { prizeId: "1", prizeName: "9折", deg: 337.5 },
  { prizeId: "2", prizeName: "8折", deg: 112.5 },
  { prizeId: "3", prizeName: "85折", deg: 247.5 },
  { prizeId: "4", prizeName: "精美小禮", deg: 67.5 },
  { prizeId: "5", prizeName: "6折", deg: 292.5 },
  { prizeId: "6", prizeName: "95折", deg: 157.5 },
  { prizeId: "7", prizeName: "未中獎", deg: 22.5 },
  { prizeId: "8", prizeName: "未中獎", deg: 202.5 },
];

const Turn = ({ prize = 8 }) => {
  const initDeg = 1800;

  return (
    <Wrapper>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </Arrow>
      <Dialog>
        {prizeDatas.map((prizeData, i) => (
          <>
            <Item key={i} $index={i} $prize={prize}></Item>
            <ItemsWord> {prizeData.prizeName}</ItemsWord>
          </>
        ))}
      </Dialog>
      <StartBtn />
    </Wrapper>
  );
};

export default Turn;
