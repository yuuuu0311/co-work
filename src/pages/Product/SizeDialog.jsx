import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

import very from "./very.jpg";
import normal from "./normal.jpg";
import strong from "./strong.jpg";

import useAIsize from "../../utils/hooks/useAIsize";

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
  height: fit-content;
  width: 50%;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1279px) {
    width: 85%;
  }
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
  @media screen and (max-width: 1279px) {
    font-size: 1rem;
  }
`;

const Button = styled.div`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  color: #454545;
  border-top: 1px #454545 solid;
  margin-top: auto;

  @media screen and (max-width: 1279px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;

  @media screen and (max-width: 1279px) {
    padding: 5rem;
    gap: 1.5rem;
  }
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

  @media screen and (max-width: 1279px) {
    gap: 0.5rem;

    span {
      font-size: 1rem;
      padding: 0.5rem;
    }

    input {
      appearance: none;
      flex: 1;
      border: none;
      border-bottom: 1px solid #888;
      padding: 0.5rem;
      font-size: 1rem;
      outline: none;
      text-align: center;

      &:focus {
        border-bottom: 1px solid #454545;
      }
    }
  }
`;

const ShapeWrap = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
`;

const ShapeOption = styled.label`
  flex: 1;

  input {
    display: inline-block;
    width: 0;
    height: 0;
    opacity: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  span {
    line-height: 0;
    background: #dfdfdf;
    text-align: center;
    display: inline-block;
    width: 100%;
    opacity: 0.15;
  }

  input:focus ~ span {
    opacity: 1;
  }
`;

const Loading = styled(ReactLoading)``;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
`;

const SizeDialog = ({ showDialog, setSelectedSize, selectedSize }) => {
  const AIsize = useAIsize(selectedSize, setSelectedSize);
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

  return (
    <>
      <BackDrop
        onClick={() => {
          showDialog();
        }}
      ></BackDrop>
      <Dialog>
        <Title>智能尺寸推薦</Title>
        {AIsize.recommendSize ? null : (
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
              <span>公斤</span>
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
                <span>
                  <img src={normal} alt="" />
                </span>
              </ShapeOption>
              <ShapeOption htmlFor="1">
                <input
                  type="radio"
                  id="1"
                  name="shape"
                  value="1"
                  onChange={(e) => handleInfoChange(e)}
                />
                <span>
                  <img src={strong} alt="" />
                </span>
              </ShapeOption>
              <ShapeOption htmlFor="2">
                <input
                  type="radio"
                  id="2"
                  name="shape"
                  value="2"
                  onChange={(e) => handleInfoChange(e)}
                />
                <span>
                  <img src={very} alt="" />
                </span>
              </ShapeOption>
            </ShapeWrap>
          </Content>
        )}

        <Result>
          {AIsize.isLoading && (
            <Loading type="spinningBubbles" color="#313538" />
          )}
          {AIsize.recommendSize === undefined ? (
            <></>
          ) : (
            <Content>您的推薦尺寸：{AIsize.recommendSize}</Content>
          )}
        </Result>

        {userInfo.height.length &&
        userInfo.weight.length &&
        userInfo.shape.length &&
        !AIsize.recommendSize?.length ? (
          <Button
            onClick={() => {
              AIsize.handleGetSize({
                weight: userInfo.weight,
                height: userInfo.height,
                shape: userInfo.shape,
              });
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
