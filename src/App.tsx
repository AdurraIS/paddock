import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Catalog } from "./Pages/Catalog/Catalog";
import { SignIn } from "./Pages/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pilots } from "./Pages/Pilots/Pilots";
import { SignUp } from "./Pages/SignUp/SignUp";

function App() {
  const [account, setAccount] = useState();
  return (
    <>
      <BrowserRouter>
        <Header account={account}/>
        <Routes>
          <Route path="/" element={<Catalog account={account}/>} />
          <Route path="/signin" element={<SignIn setAccount={setAccount} account={account} />} />
          <Route path="/signup" element={<SignUp setAccount={setAccount} account={account}/>} />
          <Route path="/pilots" element={<Pilots account={account}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
