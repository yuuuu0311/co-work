import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../context/cartContext";

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

function ProductBidBox({ product }) {
  const [selectedColorCode, setSelectedColorCode] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  function getStock(colorCode, size) {
    if (!colorCode || !size) return 0;
    const qty =
      cartItems.find(
        (item) =>
          item.id === product.id &&
          item.color.code === colorCode &&
          item.size === size
      )?.qty || 0;
    return (
      product.variants.find(
        (variant) => variant.color_code === colorCode && variant.size === size
      ).stock - qty
    );
  }

  function addToCart() {
    if (!selectedColorCode) {
      window.alert("請選擇顏色");
      return;
    }
    if (!selectedSize) {
      window.alert("請選擇尺寸");
      return;
    }
    if (quantity === 0) {
      window.alert("請選擇數量");
      return;
    }

    const index = cartItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.color.code === selectedColorCode &&
        item.size === selectedSize
    );
    const newCartItems =
      index !== -1
        ? cartItems.map((item, i) => {
            if (i === index) {
              return {
                ...item,
                qty: item.qty + quantity,
              };
            }
            return item;
          })
        : [
            ...cartItems,
            {
              color: product.colors.find(
                (color) => color.code === selectedColorCode
              ),
              id: product.id,
              image: product.main_image,
              name: product.title,
              price: product.price,
              qty: quantity,
              size: selectedSize,
              stock: getStock(selectedColorCode, selectedSize),
            },
          ];
    setCartItems(newCartItems);
    setSelectedColorCode();
    setSelectedSize();
    setQuantity(0);
    window.alert("已加入商品");
  }

  return (
    <>
      <Option>
        <QuantitySelector>
          <MathButton
            onClick={() => {
              setQuantity(quantity - 100);
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
      <AddToBid onClick={addToCart}>送出競標價格</AddToBid>
    </>
  );
}

export default ProductBidBox;
