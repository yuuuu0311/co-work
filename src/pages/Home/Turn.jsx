import React, { useState } from "react";
import styled from "styled-components";
useState;

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
`;

const Items = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  transform-origin: right bottom;
  transform: ${({ $index, $prize }) =>
    `rotate(${($index * 360) / $prize + 10}deg)`};
`;

const Item = styled.li`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: right bottom;
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? "#c1a38a" : "#f8f3f2"};
  transform: ${({ $prize }) => ` skew(${90 - 360 / $prize}deg, 0)`};
`;

const ItemsWord = styled.p`
  position: absolute;
  padding-left: 30px;
  top: 20%;
  right: 20%;
  transform-origin: center center;
  transform: rotate(25deg);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;
  font-weight: 600;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

const prizeDatas = [
  { prizeId: "1", prizeName: "9折", deg: 337.5 },
  { prizeId: "2", prizeName: "8折", deg: 112.5 },
  { prizeId: "3", prizeName: "未中獎", deg: 247.5 },
  { prizeId: "4", prizeName: "精美小禮", deg: 67.5 },
  { prizeId: "5", prizeName: "6折", deg: 292.5 },
  { prizeId: "6", prizeName: "95折", deg: 157.5 },
  { prizeId: "7", prizeName: "未中獎", deg: 22.5 },
  { prizeId: "8", prizeName: "85折", deg: 202.5 },
];

const Turn = ({ prize = 8 }) => {
  const initDeg = 1800;
  const [deg, setDeg] = useState(initDeg);

  return (
    <Wrapper>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </Arrow>
      <Dialog>
        {prizeDatas.map((prizeData, i) => (
          <Items key={i} $index={i} $prize={prize}>
            <Item $index={i} $prize={prize}></Item>
            <ItemsWord $index={i} $prize={prize}>
              {" "}
              {prizeData.prizeName}
            </ItemsWord>
          </Items>
        ))}
      </Dialog>
      <StartBtn>領取折扣</StartBtn>
    </Wrapper>
  );
};

export default Turn;
