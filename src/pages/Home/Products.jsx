import ReactLoading from "react-loading";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import useInfiniteScroll from "../../utils/hooks/useInfiniteScroll";
import useProducts from "../../utils/hooks/useProducts";

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 0 46px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1279px) {
        padding: 15px 21px 6px;
    }
`;

const Product = styled(Link)`
    width: calc((100% - 120px) / 3);
    margin: 0 20px 50px;
    flex-shrink: 0;
    text-decoration: none;

    @media screen and (max-width: 1279px) {
        width: calc((100% - 12px) / 2);
        margin: 0 3px 24px;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    vertical-align: middle;
`;

const ProductColors = styled.div`
    margin-top: 20px;
    display: flex;

    @media screen and (max-width: 1279px) {
        margin-top: 8px;
    }
`;

const ProductColor = styled.div`
    width: 24px;
    height: 24px;
    opacity: 35%;
    box-shadow: 0px 0px 3px #4e4e4e;
    background-color: ${(props) => props.$colorCode};

    @media screen and (max-width: 1279px) {
        width: 12px;
        height: 12px;
    }

    & + & {
        margin-left: 10px;

        @media screen and (max-width: 1279px) {
            margin-left: 6px;
        }
    }
`;

const ProductTitle = styled.div`
    margin-top: 20px;
    font-size: 20px;
    letter-spacing: 4px;
    color: #3f3a3a;
    line-height: 24px;

    @media screen and (max-width: 1279px) {
        margin-top: 10px;
        font-size: 12px;
        letter-spacing: 2.4px;
        line-height: 14px;
    }
`;

const ProductPrice = styled.div`
    margin-top: 10px;
    font-size: 20px;
    letter-spacing: 4px;
    color: #3f3a3a;
    line-height: 24px;

    @media screen and (max-width: 1279px) {
        margin-top: 8px;
        font-size: 12px;
        letter-spacing: 2.4px;
        line-height: 14px;
    }
`;

const ProductSold = styled.div`
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 4px;
    color: #888888;
    line-height: 24px;
    @media screen and (max-width: 1279px) {
        margin-top: 8px;
        font-size: 12px;
        letter-spacing: 2.4px;
        line-height: 14px;
    }
`;

const Loading = styled(ReactLoading)`
    margin: 0 auto;
`;

function Products() {
    const [searchParams] = useSearchParams();

    const keyword = searchParams.get("keyword");
    const category = searchParams.get("category") || "all";

    const { markSoldNum, products, loadMoreProducts, isLoading } = useProducts({
        keyword,
        category,
    });
    useInfiniteScroll(loadMoreProducts);

    // sort
    const sortedArray = products.slice().sort((a, b) => {
        return a.price - b.price;
    });

    console.log(sortedArray);

    return (
        <Wrapper>
            {products.map(({ id, main_image, colors, title, price }) => (
                <Product key={id} to={`/products/${id}`}>
                    <ProductImage src={main_image} />
                    <ProductColors>
                        {colors.map(({ code }) => (
                            <ProductColor $colorCode={`#${code}`} key={code} />
                        ))}
                    </ProductColors>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductPrice>TWD.{price}</ProductPrice>
                    <ProductSold>已售出{markSoldNum}件</ProductSold>
                </Product>
            ))}
            {isLoading && <Loading type="spinningBubbles" color="#313538" />}
        </Wrapper>
    );
}

export default Products;
