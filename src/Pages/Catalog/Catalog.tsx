import { useState, useEffect } from "react";
import { InputSearch } from "../../Components/InputSearch/InputSearch";

import { ContentCatalog } from "../../Components/ContentCatalog/ContentCatalog";
import { useLocation, useNavigate } from "react-router-dom";


export const Catalog = ({account}) => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if(location.pathname == "/" && account){
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
