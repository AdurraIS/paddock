import { useState } from "react";
import { InputSearch } from "../../Components/InputSearch/InputSearch";
import { Header } from "../../Components/Header/Header";


export const Catalog = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <div className="container w-[100vw] min-h-screen">
                <InputSearch search={search} setSearch={setSearch} />
            </div>
        </>
    )
}
