import React from "react";
import styled from "styled-components";

const WarpBidders = styled.div`
  margin: 90px 0;
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

  hr {
    height: 100px;
    border: 1px solid #ccc;
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
`;

const BiddersItemDetail = styled.div`
  font-size: 30px;
  text-align: center;
  h1 {
    margin: 20px 0;
  }
  p {
    color: #af2922;
  }
`;

const BiddersRecord = styled.div`
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
`;

const BiddersRecordItems = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr 100px;
  align-items: center;
  font-size: 26px;
  border: ;

  div {
    width: 44px;
    height: 44px;
    background-color: #757677;
    border-radius: 50%;
  }
`;

const Bidders = ({ product }) => {
  return (
    <>
      <WarpBidders>
        <BiddersItems>
          <BiddersCountDown>限時搶購倒數 24:00:00</BiddersCountDown>
          <BiddersItemDetail>
            <h1>起標價</h1>
            <p>TWD. {product.price}</p>
          </BiddersItemDetail>
          <hr />
          <BiddersItemDetail>
            <h1>最高競標價</h1>
            <p>TWD. {product.price}</p>
          </BiddersItemDetail>
          <hr />
          <BiddersItemDetail>
            <h1>競標人數</h1>
            <p>5人</p>
          </BiddersItemDetail>
        </BiddersItems>
      </WarpBidders>
      <WarpBidders>
        <BiddersItems>
          <BiddersRecord>競標紀錄</BiddersRecord>
          <BiddersRecordItems>
            <div></div>
            <h1>使用者3</h1>
            <p>TWD. {product.price}</p>
          </BiddersRecordItems>
        </BiddersItems>
      </WarpBidders>
    </>
  );
};

export default Bidders;
