import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { db } from "../../utils/firestore";
import { onSnapshot, collection } from "firebase/firestore";

const WarpBidders = styled.div`
  margin: 60px 0;
`;

const BiddersItems = styled.div`
  border: 1px solid #ccc;
  min-height: 220px;
  width: 100%;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 90px;
  box-shadow: 0px 2px 6px 0px #dadada;

  hr {
    height: 100px;
    border: 1px solid #ccc;
  }

  @media screen and (max-width: 1279px) {
    min-height: 160px;
    padding: 0;
    border-radius: 32px;

    hr {
      height: 80px;
    }
  }
`;

const BiddersCountDown = styled.div`
  border-radius: 14px;
  height: 60px;
  width: 400px;
  position: absolute;
  background-color: #af2922;
  color: #fff;
  top: -30px;
  text-align: center;
  line-height: 60px;
  font-size: 26px;

  @media screen and (max-width: 1279px) {
    height: 48px;
    width: 300px;

    top: -24px;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
  }
`;

const BiddersItemDetail = styled.div`
  font-size: 30px;
  text-align: center;
  width: 100%;
  h1 {
    margin: 20px 0;
  }
  p {
    color: #af2922;
  }

  @media screen and (max-width: 1279px) {
    font-size: 20px;

    h1 {
      margin: 14px 0;
    }
    p {
      color: #af2922;
    }
  }
`;

const BiddersRecord = styled.div`
  border: 1px solid #ccc;
  min-height: 220px;
  width: 100%;
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 60px 90px 40px;
  box-shadow: 0px 2px 6px 0px #dadada;

  @media screen and (max-width: 1279px) {
    min-height: 260px;
    border-radius: 32px;
    gap: 12px;
    padding: 50px 30px 36px;
    box-shadow: 0px 2px 6px 0px #dadada;
  }
`;

const BiddersRecordTitle = styled.div`
  border-radius: 14px;
  height: 60px;
  width: 400px;
  position: absolute;
  background-color: #221c1c;
  color: #fff;
  top: -30px;
  text-align: center;
  line-height: 60px;
  font-size: 26px;

  @media screen and (max-width: 1279px) {
    height: 48px;
    width: 300px;

    top: -24px;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
  }
`;

const BiddersRecordItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 26px;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0px 2px 6px 0px #dadada;

  div {
    width: 44px;
    height: 44px;
    background-color: #757677;
    border-radius: 50%;
  }

  @media screen and (max-width: 1279px) {
    font-size: 20px;

    border-radius: 26px;
    padding: 4px;
  }
`;

const Bidders = ({ product, quantity, storeQuantity, bidUsers }) => {
  return (
    <>
      <WarpBidders>
        <BiddersItems>
          <BiddersCountDown>限時搶購倒數</BiddersCountDown>
          <BiddersItemDetail>
            <h1>起標價</h1>
            <p>TWD. 1000</p>
          </BiddersItemDetail>
          <hr />
          <BiddersItemDetail>
            <h1>最高競標價</h1>
            <p>TWD. {storeQuantity}</p>
          </BiddersItemDetail>
          <hr />
          <BiddersItemDetail>
            <h1>競標人數</h1>
            <p>{bidUsers.length}人</p>
          </BiddersItemDetail>
        </BiddersItems>
      </WarpBidders>
      <WarpBidders>
        <BiddersRecord>
          <BiddersRecordTitle>競標紀錄</BiddersRecordTitle>
          {bidUsers?.map((bidUser, index) => {
            return (
              <BiddersRecordItems key={index}>
                <h1>{bidUser.name}</h1>
                <p>TWD. {bidUser.price}</p>
              </BiddersRecordItems>
            );
          })}
        </BiddersRecord>
      </WarpBidders>
    </>
  );
};

export default Bidders;
