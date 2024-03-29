import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../utils/api";
import ProductVariants from "./ProductVariants";
import Stars from "../../components/Stars";

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

const Price = styled.div`
  line-height: 36px;
  margin-top: 40px;
  font-size: 30px;
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

//Add the recommendations of the product
const Recommend = styled.div`
  margin: 50px 0 0;
  width: 100%;

  @media screen and (max-width: 1279px) {
    margin: 28px 24px 0;
  }
`;

const RecommendTitle = styled.div`
  line-height: 30px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #8b572a;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    font-size: 16px;
    display: block;
    letter-spacing: 3.2px;
    text-align: center;
    color: black;
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

const RecommendContent = styled.div`
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

const RecommendMainImage = styled.img`
  width: 202px;

  @media screen and (max-width: 1279px) {
    width: 100%;
    padding-right: 10px;
  }
`;

const RecommendProductTitle = styled.div`
  line-height: 38px;
  font-size: 24px;
  letter-spacing: 6.4px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 12px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

const RecommendID = styled.div`
  line-height: 1px;
  margin-top: 16px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #bababa;

  @media screen and (max-width: 1279px) {
    line-height: 15px;
    margin-top: 5px;
    font-size: 10px;
    letter-spacing: 1px;
    text-align: center;
  }
`;

const RecommendPrice = styled.div`
  line-height: 1px;
  margin-top: 40px;
  font-size: 20px;
  color: red;
  padding-bottom: 20px;

  @media screen and (max-width: 1279px) {
    line-height: 15px;
    margin-top: 5px;
    font-size: 12px;
    text-align: center;
    padding-bottom: 5px;
  }
`;

const RecommendSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Recommendblock = styled.div``;

const CommentStar = styled.div`
  margin-top: 20px;
`;

const CommentUser = styled.div`
  display: none;
  @media screen and (max-width: 1279px) {
    display: block;
    font-size: 25px;
    margin-bottom: 15px;
    margin-top: 20px;
  }
`;

//................................................................

const Images = styled.div`
  margin: 30px 0 0;

  @media screen and (max-width: 1279px) {
    margin: 20px 24px 0;
    width: 100%;
  }
`;

const Image = styled.img`
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

function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const { data } = await api.getProduct(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  if (!product) return null;

  return (
    <Wrapper>
      <MainImage src={product.main_image} />
      <Details>
        <Title>{product.title}</Title>
        <ID>{product.id}</ID>
        <Price>TWD.{product.price}</Price>
        <ProductVariants product={product} />
        <Note>{product.note}</Note>
        <Texture>{product.texture}</Texture>
        <Description>{product.description}</Description>
        <Place>素材產地 / {product.place}</Place>
        <Place>加工產地 / {product.place}</Place>
        <CommentStar>
          <CommentUser>
            <p>使用者A</p>
          </CommentUser>
          <Stars size={40} rate={4} space={8} />
        </CommentStar>
      </Details>

      <Recommend>
        <RecommendTitle>推薦商品</RecommendTitle>
        <RecommendSection>
          <Recommendblock>
            <RecommendMainImage src={product.main_image} />
            <RecommendProductTitle>{product.title}</RecommendProductTitle>
            <RecommendID>{product.id}</RecommendID>
            <RecommendPrice>TWD.{product.price}</RecommendPrice>
          </Recommendblock>

          <Recommendblock>
            <RecommendMainImage src={product.main_image} />
            <RecommendProductTitle>{product.title}</RecommendProductTitle>
            <RecommendID>{product.id}</RecommendID>
            <RecommendPrice>TWD.{product.price}</RecommendPrice>
          </Recommendblock>

          <Recommendblock>
            <RecommendMainImage src={product.main_image} />
            <RecommendProductTitle>{product.title}</RecommendProductTitle>
            <RecommendID>{product.id}</RecommendID>
            <RecommendPrice>TWD.{product.price}</RecommendPrice>
          </Recommendblock>

          <Recommendblock>
            <RecommendMainImage src={product.main_image} />
            <RecommendProductTitle>{product.title}</RecommendProductTitle>
            <RecommendID>{product.id}</RecommendID>
            <RecommendPrice>TWD.{product.price}</RecommendPrice>
          </Recommendblock>
        </RecommendSection>
      </Recommend>

      <Story>
        <StoryTitle>細部說明</StoryTitle>
        <StoryContent>{product.story}</StoryContent>
      </Story>
      <Images>
        {product.images.map((image, index) => (
          <Image src={image} key={index} />
        ))}
      </Images>
    </Wrapper>
  );
}

export default Product;
