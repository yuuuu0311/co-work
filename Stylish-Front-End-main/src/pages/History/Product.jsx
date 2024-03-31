import { useEffect, useState } from "react";
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
    justify-content: center;
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
    function handleCommentSubmit(e) {
        e.preventDafault;
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
                    {product.star === 0 ? (
                        <form action="" onSubmit={handleCommentSubmit}>
                            <ProductComment>
                                <ProductInfo>請填寫評論</ProductInfo>
                                <CommentStars
                                    starIndex={starIndex}
                                    setStarIndex={setStarIndex}
                                />
                                {/* <input type="text" placeholder="請輸入評論" /> */}
                                <button>送出</button>
                            </ProductComment>
                        </form>
                    ) : (
                        <ProductComment>
                            <p>已填寫評論</p>
                            <Stars rate={product.star} size={20} />
                        </ProductComment>
                    )}
                </ProductCommentWarp>
            </ProductInfoWrap>
        </ProductWrap>
    );
}

export default Product;
