import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Catalog } from "./Pages/Catalog/Catalog";
import { SignIn } from "./Pages/SignIn/SignIn";
import { Pilots } from "./Pages/Pilots/Pilots";
import { SignUp } from "./Pages/SignUp/SignUp";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const [account, setAccount] = useState();
  return (
    <>
      <BrowserRouter >
        <Header  account={account} />
        <Routes >
          <Route path="/" element={<Catalog account={account} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn setAccount={setAccount} account={account} />} />
          <Route path="/signup" element={<SignUp setAccount={setAccount} account={account} />} />
          <Route path="/pilots" element={<Pilots account={account} />} />
        </Routes>
        <Footer account={account} />
      </BrowserRouter>
    </>
  );
}

export default App;
