import { useState } from "react";
import { InputSearch } from "../../Components/InputSearch/InputSearch";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

import { ContentCatalog } from "../../Components/ContentCatalog/ContentCatalog";

export const Catalog = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="container w-[100%] min-h-screen">
                <Header />
                <InputSearch search={search} setSearch={setSearch} />
                <ContentCatalog />
                <Footer />
            </div>
        </>
    )
}
