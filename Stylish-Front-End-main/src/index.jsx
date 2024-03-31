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


import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_TOKEN,
  authDomain: "co-work-d9ba7.firebaseapp.com",
  projectId: "co-work-d9ba7",
  storageBucket: "co-work-d9ba7.appspot.com",
  messagingSenderId: "590381400399",
  appId: "1:590381400399:web:539a0e1315944d1e6bc53a",
};

const app = initializeApp(firebaseConfig);

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
        <Route path="bid" element={<Bid />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
