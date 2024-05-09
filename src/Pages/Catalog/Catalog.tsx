import { useState, useEffect } from "react";
import { InputSearch } from "../../Components/InputSearch/InputSearch";
import { Footer } from "../../Components/Footer/Footer";

import { ContentCatalog } from "../../Components/ContentCatalog/ContentCatalog";

export const Catalog = () => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        if(location.pathname == "/"){
         navigate("/signin")
        }
     }, [location.pathname]);

    return (
        <>
            <div className="container w-[100vw] min-h-screen">
                <InputSearch search={search} setSearch={setSearch} />
                <ContentCatalog />
            </div>
        </>
    )
}
