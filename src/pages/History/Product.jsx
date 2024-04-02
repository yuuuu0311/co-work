import { useState } from "react";
import Stars from "../../components/Stars";
import CommentStars from "./CommentStars";

import styled from "styled-components";

const ProductWrap = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProductImg = styled.div`
  max-width: 30%;
  img {
    width: 100%;
    height: auto;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductTitle = styled.div`
  color: #454545;
`;

const ProductInfo = styled.div`
  color: #454545;
`;

const ProductCommentWarp = styled.div`
  margin-top: auto;
`;

const ProductComment = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;

  button {
    border: none;
    background-color: #da880d;
    color: #fff;
    width: 80px;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #b06e0b;
  }
`;

function Product({ product }) {
  const [starIndex, setStarIndex] = useState(0); // 這個是user商品的星星數，因為是index所以送出時應該要再加1
  const [isRate, setIsRate] = useState(false);

  async function handleComment(e) {
    e.preventDefault();
    setIsRate(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 10274,
        product_id: product.id,
        star: starIndex + 1,
      }),
    };

    const response = await fetch(
      "https://smillzy.net/api/1.0/products/comments",
      requestOptions
    );
    const data = await response.json();
  }

  return (
    <ProductWrap key={product.id}>
      <ProductImg>
        <img src={product.main_image} alt="" />
      </ProductImg>
      <ProductInfoWrap>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductInfo>{product.id}</ProductInfo>
        <ProductInfo>顏色｜{product.color.name}</ProductInfo>
        <ProductInfo>尺寸｜{product.size}</ProductInfo>
        <ProductCommentWarp>
          {product.star !== 0 || isRate ? (
            <ProductComment>
              <p>已填寫評論</p>
              <Stars
                rate={product.star === 0 ? starIndex + 1 : product.star}
                size={20}
              />
            </ProductComment>
          ) : (
            <ProductComment>
              <ProductInfo>請填寫評論</ProductInfo>
              <CommentStars starIndex={starIndex} setStarIndex={setStarIndex} />
              <button onClick={handleComment}>送出</button>
            </ProductComment>
          )}
        </ProductCommentWarp>
      </ProductInfoWrap>
    </ProductWrap>
  );
}

export default Product;
