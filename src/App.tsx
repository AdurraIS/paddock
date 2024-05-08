import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Catalog } from "./Pages/Catalog/Catalog";
import { SignIn } from "./Pages/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pilots } from "./Pages/Pilots/Pilots";

function App() {
  const [account, setAccount] = useState();
  return (
    <>
      <BrowserRouter>
        <Header account={account}/>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/signin" element={<SignIn setAccount={setAccount} />} />
          <Route path="/pilots" element={<Pilots/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
