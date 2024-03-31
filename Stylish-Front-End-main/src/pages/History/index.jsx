import { useEffect, useState } from "react";

import Product from "./Product";
import styled from "styled-components";
import api from "../../utils/api";
// import ProductVariants from "./ProductVariants";

const Wrapper = styled.div`
    max-width: 960px;
    margin: 2rem auto;
    padding: 65px 0 49px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
        margin: 1rem auto;
    }
`;

const Title = styled.h3`
    font-size: 2rem;
    padding: 1.25rem 0;
    width: 100%;
    border-bottom: 1px solid #454545;

    @media screen and (max-width: 1279px) {
        font-size: 1.5rem;
        padding: 1.25rem 0rem;
        margin: 0 0.5rem;
        width: 100%;
        border-bottom: 1px solid #454545;
    }
`;

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: 2rem auto;
    @media screen and (max-width: 1279px) {
        margin: 2rem 1rem;
    }
`;

const Order = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid gray;
    padding: 1rem;
`;
const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #454545;
    border-bottom: 1px solid gray;
    padding: 0rem 0 1rem;
`;

// markData
const markData = {
    orderList: [
        {
            id: 100000001,
            date: 1710087463000,
            list: [
                {
                    id: 201807201824,
                    name: "前開衩扭結洋裝", //應改成title
                    price: 799,
                    main_image:
                        "https://api.appworks-school.tw/assets/201807201824/main.jpg",
                    color: {
                        name: "白色",
                        code: "FFFFFF",
                    },
                    size: "M",
                    qty: 10,
                    star: 0,
                },
                {
                    id: 201807201824,
                    name: "前開衩扭結洋裝", //應改成title
                    price: 799,
                    main_image:
                        "https://api.appworks-school.tw/assets/201807201824/main.jpg",
                    color: {
                        name: "白色",
                        code: "FFFFFF",
                    },
                    size: "M",
                    qty: 10,
                    star: 4,
                },
                // ...
            ],
            total: 99999,
        },
        // ...
    ],
};

function HistoryPage() {
    const [historyOrder, setHistoryOrder] = useState(undefined);

    useEffect(() => {
        (async () => {
            try {
                const data = await api.getHistory(10273);

                data.orderList === undefined
                    ? setHistoryOrder(markData.orderList)
                    : setHistoryOrder(data.orderList);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <Wrapper>
            <Title>歷史訂單</Title>
            <OrderList>
                {historyOrder?.map((order, index) => {
                    const { id, date, list: productList } = order;

                    return (
                        <Order key={order.id}>
                            <InfoWrap>
                                <p>訂單編號：{id}</p>
                                <p>
                                    訂單時間：
                                    {new Date(date).toDateString()}
                                </p>
                            </InfoWrap>
                            {productList.map((product, index) => {
                                return (
                                    <Product
                                        product={product}
                                        key={product.id + index}
                                    ></Product>
                                );
                            })}
                        </Order>
                    );
                })}
            </OrderList>
        </Wrapper>
    );
}

export default HistoryPage;
