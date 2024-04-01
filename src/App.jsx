import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/authContext";
import { CartContextProvider } from "./context/cartContext";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Noto Sans TC', sans-serif;
  }

  #root {
    min-height: 100vh;
    padding: 150px 0 115px;
    position: relative;

    @media screen and (max-width: 1279px) {
      padding: 150px 0 208px;
    }
  }
`;

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <AuthContextProvider>
                <CartContextProvider>
                    <Header />
                    <Outlet />
                    <Footer />
                </CartContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
