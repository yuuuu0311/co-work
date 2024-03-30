import { useContext } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";

// component
import Button from "../../components/Profile/Button";

// icon
import { FaAddressCard, FaBitcoin, FaBiking, FaBomb } from "react-icons/fa";

const Wrapper = styled.div`
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Title = styled.div`
    padding-bottom: 16px;
    border-bottom: 1px solid #979797;
    font-size: 24px;
    font-weight: bold;
`;

const Photo = styled.img`
    margin-top: 24px;
`;

const Content = styled.div`
    margin-top: 24px;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 2rem 1rem;
    gap: 3rem;
`;

const LogoutButton = styled.button`
    margin-top: 24px;
`;

const Loading = styled(ReactLoading)`
    margin-top: 50px;
`;

console.log(FaBitcoin);

function Profile() {
    const { user, isLogin, login, logout, loading } = useContext(AuthContext);

    const renderContent = () => {
        if (loading) return <Loading type="spinningBubbles" color="#313538" />;
        if (isLogin)
            return (
                <>
                    <Photo src={user.picture} />

                    <Content>{user.name}</Content>
                    <Content>{user.email}</Content>
                    <LogoutButton onClick={logout}>登出</LogoutButton>

                    <Content>
                        <Title>我的訂單</Title>
                        <Container>
                            <Button path={"/history"} icon={FaBitcoin}>
                                待付款
                            </Button>
                            <Button path={"/history"} icon={FaBiking}>
                                待出貨
                            </Button>
                            <Button path={"/history"} icon={FaAddressCard}>
                                待評價
                            </Button>
                            <Button path={"/history"} icon={FaBomb}>
                                待簽收
                            </Button>
                        </Container>
                    </Content>
                </>
            );
        return <LogoutButton onClick={login}>登入</LogoutButton>;
    };
    return (
        <Wrapper>
            <Title>會員基本資訊</Title>
            {renderContent()}
        </Wrapper>
    );
}

export default Profile;
