import { useState } from "react";
import { InputSearch } from "../../Components/InputSearch/InputSearch";
import { Header } from "../../Components/Header/Header";
import { Header2 } from "../../Components/Header/Header2";
import { Footer } from "../../Components/Footer/Footer";


import { ContentPilots } from "../../Components/ContentPilots/ContentPilots.jsx";


export const Pilots = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="container w-[100%] min-h-screen">
                <Header2 />
                <ContentPilots />
                <Footer />
            </div>
        </>
    )
}
