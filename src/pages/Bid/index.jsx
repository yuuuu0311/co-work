import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../utils/api";
import ProductBidBox from "./ProductBidBox";
import Bidders from "./Bidders";
import { db } from "../../utils/firestore";
import image from "./image.png";
import detailImage1 from "./0.png";
import detailImage2 from "./1.png";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 65px 0 49px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1279px) {
    padding: 0 0 32px;
  }
`;

const MainImage = styled.img`
  width: 560px;
  background-image: url(${image});

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

const Details = styled.div`
  margin-left: 42px;
  flex-grow: 1;

  @media screen and (max-width: 1279px) {
    margin: 17px 24px 0;
  }
`;

const Title = styled.div`
  line-height: 38px;
  font-size: 32px;
  letter-spacing: 6.4px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 4px;
  }
`;

const ID = styled.div`
  line-height: 24px;
  margin-top: 16px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #bababa;

  @media screen and (max-width: 1279px) {
    line-height: 19px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`;

const BidTitle = styled.div`
  line-height: 38px;
  font-size: 32px;
  letter-spacing: 6.4px;
  margin-top: 80px;
  color: #3f3a3a;
  padding-bottom: 20px;
  border-bottom: 1px solid #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    margin-top: 20px;
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const Detail = styled.div`
  line-height: 30px;
  font-size: 20px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 14px;
  }
`;

const Note = styled(Detail)`
  margin-top: 40px;

  @media screen and (max-width: 1279px) {
    margin-top: 28px;
  }
`;

const Texture = styled(Detail)`
  margin-top: 30px;

  @media screen and (max-width: 1279px) {
    margin-top: 24px;
  }
`;

const Description = styled(Detail)`
  white-space: pre;
`;

const Place = styled(Detail)`
  ${Description} + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 24px;
    }
  }
`;

const Story = styled.div`
  margin: 50px 0 0;
  width: 100%;

  @media screen and (max-width: 1279px) {
    margin: 28px 24px 0;
  }
`;

const StoryTitle = styled.div`
  line-height: 30px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #8b572a;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: 3.2px;
  }

  &::after {
    content: "";
    height: 1px;
    flex-grow: 1;
    background-color: #3f3a3a;
    margin-left: 64px;

    @media screen and (max-width: 1279px) {
      margin-left: 35px;
    }
  }
`;

const StoryContent = styled.div`
  line-height: 30px;
  margin-top: 28px;
  font-size: 20px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 25px;
    margin-top: 12px;
    font-size: 14px;
  }
`;

const Images = styled.div`
  margin: 30px 0 0;
  width: 100%;

  @media screen and (max-width: 1279px) {
    margin: 20px 24px 0;
    width: 100%;
  }
`;

const Image1 = styled.img`
  background-image: url(${detailImage1});

  width: 100%;
  height: 540px;
  margin-top: 30px;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  & + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`;

const Image2 = styled.img`
  background-image: url(${detailImage2});

  width: 100%;
  margin-top: 30px;

  height: 540px;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  & + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`;

const markData = {
  id: 201807201824,
  title: "永恆水晶項鍊",
  description: "厚薄：薄 彈性：無",
  price: 799,
  texture: "棉 100%",
  wash: "手洗，溫水",
  place: "中國",
  note: "實品顏色依單品照為主",
  story:
    "O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.",
  main_image: "src/pages/Bid/image.png",
  images: ["src/pages/Bid/0.png", "src/pages/Bid/1.png"],
};

function Bid() {
  //   const [product, setProduct] = useState();
  //   const { id } = useParams();
  const product = markData;

  //   useEffect(() => {
  //     async function getProduct() {
  //       const { data } = await api.getProduct(id);
  //       setProduct(data);
  //     }
  //     getProduct();
  //   }, [id]);

  //   if (!product) return null;

  return (
    <Wrapper>
      {/* <MainImage src={product.main_image} /> */}
      <MainImage />
      <Details>
        <Title>{product.title}</Title>
        <ID>{product.id}</ID>
        <Note>{product.note}</Note>
        <Texture>{product.texture}</Texture>
        <Description>{product.description}</Description>
        <Place>素材產地 / {product.place}</Place>
        <Place>加工產地 / {product.place}</Place>
        <BidTitle>參與競標</BidTitle>
        <ProductBidBox product={product} />
      </Details>
      <Story>
        <Bidders product={product} />
        <StoryTitle>細部說明</StoryTitle>
        <StoryContent>{product.story}</StoryContent>
      </Story>
      <Images>
        <Image1 />
        <Image2 />
      </Images>
    </Wrapper>
  );
}

export default Bid;
