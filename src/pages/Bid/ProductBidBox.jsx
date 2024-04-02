import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../utils/firestore";

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const QuantitySelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 0 10px;
  font-size: 70px;

  @media screen and (max-width: 1279px) {
    margin-left: 0;
    width: 100%;
    padding: 0 30px;
    font-size: 50px;
  }
`;

const Quantity = styled.div`
  color: #af2922;
`;

const Button = styled.div`
  cursor: pointer;
  background-size: contain;
  width: 16px;
  height: 16px;
`;

const MathButton = styled(Button)``;

const AddToBid = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 29px;
  border: solid 1px #979797;
  background-color: black;
  font-size: 20px;
  letter-spacing: 4px;
  color: white;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background-color: #aa6a67;
  }

  @media screen and (max-width: 1279px) {
    height: 44px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 3.2px;
    color: white;
  }
`;

function ProductBidBox({ product, quantity, storeQuantity, setQuantity }) {
  async function handlebid(e) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "bids"), {
        name: "Melody",
        price: quantity,
        product_id: product.id,
        time: serverTimestamp(),
        user_id: 9930716,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <Option>
        <QuantitySelector>
          <MathButton
            onClick={() => {
              if (quantity - 100 >= storeQuantity) setQuantity(quantity - 100);
            }}
          >
            -
          </MathButton>
          <Quantity>{quantity}</Quantity>
          <MathButton
            onClick={() => {
              setQuantity(quantity + 100);
            }}
          >
            +
          </MathButton>
        </QuantitySelector>
      </Option>
      <AddToBid onClick={handlebid}>送出競標價格</AddToBid>
    </>
  );
}

export default ProductBidBox;
