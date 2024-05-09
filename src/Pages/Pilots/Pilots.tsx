import { useState, useEffect } from "react";

import { ContentPilots } from "../../Components/ContentPilots/ContentPilots.js";
import { useLocation, useNavigate } from "react-router-dom";


export const Pilots = ({account}) => {

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
            <div className="container w-[100%] min-h-screen">
                <ContentPilots />
            </div>
        </>
    )
}
