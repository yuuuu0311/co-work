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
    height: 50%;
    width: 70%;
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
    /* @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
    } */
`;

const Close = styled.div`
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
    /* @media screen and (max-width: 1279px) {
        padding: 0 0 32px;
    } */
`;

const SizeDialog = ({ showDialog }) => {
    return (
        <>
            <BackDrop
                onClick={() => {
                    showDialog();
                }}
            ></BackDrop>
            <Dialog>
                <Title>智能尺寸推薦</Title>
                <Content></Content>
                <Close
                    onClick={() => {
                        showDialog();
                    }}
                >
                    關閉
                </Close>
            </Dialog>
        </>
    );
};

export default SizeDialog;
