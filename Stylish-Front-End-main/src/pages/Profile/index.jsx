import { useContext } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";

// component
import Icon from "../../components/Profile/Icon";
import { Link } from "react-router-dom";

// icon
import { FaAddressCard } from "react-icons/fa";

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
    padding: 1rem;
    gap: 1rem;
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: black;
`;

const LogoutButton = styled.button`
    margin-top: 24px;
`;

const Loading = styled(ReactLoading)`
    margin-top: 50px;
`;

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
                            <Link to="/history">
                                <Button>
                                    <Icon>
                                        <FaAddressCard />
                                    </Icon>
                                    待評價
                                </Button>
                            </Link>
                            <Link to="/history">
                                <Button>
                                    <Icon>
                                        <FaAddressCard />
                                    </Icon>
                                    待評價
                                </Button>
                            </Link>
                            <Link to="/history">
                                <Button>
                                    <Icon>
                                        <FaAddressCard />
                                    </Icon>
                                    待評價
                                </Button>
                            </Link>
                            <Link to="/history">
                                <Button>
                                    <Icon>
                                        <FaAddressCard />
                                    </Icon>
                                    待評價
                                </Button>
                            </Link>
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
