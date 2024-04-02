import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Bid from "./pages/Bid";
import ThankYou from "./pages/ThankYou";
import LiveStream from "./pages/LiveStream";
import Turn from "./pages/Home/Turn";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="profile" element={<Profile />} />
        <Route path="history" element={<History />} />
        {/* <Route path="bid" element={<Bid />} /> */}
        {/* <Route path="turn" element={<Turn />} /> */}
        {/* <Route path="live" element={<LiveStream />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
