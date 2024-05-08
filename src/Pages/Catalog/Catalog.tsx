import { useState } from "react";
import { InputSearch } from "../../Components/InputSearch/InputSearch";

import { ContentCatalog } from "../../Components/ContentCatalog/ContentCatalog";
import { Footer } from "../../Components/Footer/Footer";

export const Catalog = () => {

    const [search, setSearch] = useState('');

    return (
        <div className="container w-[100vw] min-h-screen">
            <InputSearch search={search} setSearch={setSearch} />
            <ContentCatalog />
            <Footer />
        </div>
    )
}
