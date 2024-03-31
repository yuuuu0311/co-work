import { useEffect, useState } from "react";

import styled from "styled-components";

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);

    display: grid;
    place-items: center;
    z-index: 1001;
    /* @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
    } */
`;

const Dialog = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1002;
    height: 25%;
    width: 50%;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
    } */
`;

const Title = styled.div`
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    color: #454545;
    border-bottom: 1px #454545 solid;

    color: white;
    background: #454545;
    /* @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
    } */
`;

const Button = styled.div`
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    color: #454545;
    border-top: 1px #454545 solid;
    margin-top: auto;

    /* @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
    } */
`;

const Content = styled.div`
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.75rem;
`;

const Lable = styled.label`
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    span {
        font-size: 1.25rem;
        padding: 1rem;
    }

    input {
        appearance: none;
        flex: 1;
        border: none;
        border-bottom: 1px solid #888;
        padding: 1rem;
        font-size: 1.25rem;
        outline: none;
        text-align: center;

        &:focus {
            border-bottom: 1px solid #454545;
        }
    }
`;

const ShapeWrap = styled.div`
    display: flex;
    gap: 1rem;
`;

const ShapeOption = styled.label`
    flex: 1;

    input {
        display: inline-block;
        width: 0;
        height: 0;
        opacity: 0;
    }

    span {
        color: #888888;
        font-size: 1.5rem;
        padding: 1rem;
        background: #dfdfdf;
        text-align: center;
        display: inline-block;
        width: 100%;
        border-radius: 1rem;
    }

    input:focus ~ span {
        color: #454545;
        background: #b5ff98;
    }
`;

// const ShapeTitle = styled.div``;

const SizeDialog = ({ showDialog }) => {
    const [userInfo, setUserInfo] = useState(() => ({
        height: "",
        weight: "",
        shape: "",
    }));

    const handleInfoChange = (e) => {
        const regx = /[0-9]/;

        if (!regx.test(e.target.value)) {
            setUserInfo((prev) => ({
                ...prev,
            }));
        } else {
            setUserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = () => {
        console.log("submit");
    };

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return (
        <>
            <BackDrop
                onClick={() => {
                    showDialog();
                }}
            ></BackDrop>
            <Dialog>
                <Title>智能尺寸推薦</Title>
                <Content>
                    <Lable htmlFor="height">
                        <span>身高</span>
                        <input
                            type="text"
                            id="height"
                            name="height"
                            onChange={(e) => handleInfoChange(e)}
                            value={userInfo.height}
                        ></input>
                        <span>公分</span>
                    </Lable>
                    <Lable htmlFor="weight">
                        <span>體重</span>
                        <input
                            type="text"
                            id="weight"
                            name="weight"
                            onChange={(e) => handleInfoChange(e)}
                            value={userInfo.weight}
                        ></input>
                        <span>公分</span>
                    </Lable>

                    <ShapeWrap>
                        <ShapeOption htmlFor="0">
                            <input
                                type="radio"
                                id="0"
                                name="shape"
                                value="0"
                                onChange={(e) => handleInfoChange(e)}
                            />
                            <span>苗挑</span>
                        </ShapeOption>
                        <ShapeOption htmlFor="1">
                            <input
                                type="radio"
                                id="1"
                                name="shape"
                                value="1"
                                onChange={(e) => handleInfoChange(e)}
                            />
                            <span>一般</span>
                        </ShapeOption>
                        <ShapeOption htmlFor="2">
                            <input
                                type="radio"
                                id="2"
                                name="shape"
                                value="2"
                                onChange={(e) => handleInfoChange(e)}
                            />
                            <span>肥胖</span>
                        </ShapeOption>
                    </ShapeWrap>
                </Content>

                {userInfo.height.length &&
                userInfo.weight.length &&
                userInfo.shape.length ? (
                    <Button
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        送出
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            showDialog();
                        }}
                    >
                        關閉
                    </Button>
                )}
            </Dialog>
        </>
    );
};

export default SizeDialog;
