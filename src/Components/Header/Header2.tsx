import { useState } from "react"
import { RxAvatar } from "react-icons/rx";

import Icon from '../../assets/icones/iconesComponent';

export const Header2 = () => {
    const [at, setAt] = useState(1);
    const [tokens, setTokens] = useState(0);
    function handleSelect(number: number) {
        setAt(number)
    }
    return (
        <>
            <div className="w-[100%] bg-[#28272f]  text-[16px] text-white min-h-full flex justify-center items-center h-20">
                <Icon className="w-[10vw] flex  flex-row items-center" name="paddock"></Icon>
                <ul className="mx-[20vw] relative flex justify-center gap-4 items-center flex-row">
                    <li className={`${at == 1 ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(1)}>Home</button>
                    </li>
                    <li className={`${at == 2 ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(2)}>Tokens</button>
                    </li>
                    <li className={`${at == 3 ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(3)}>NFTs</button>
                    </li>
                    <li className={`${at == 4 ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(4)}>Pilots</button>
                    </li>

                </ul>
                <div className="w-[10vw] flex flex-row items-center justify-end  gap-4 text-[#EF3331]">
                    {tokens} PDK
                    <button>
                        <RxAvatar size="25px" />
                    </button>
                </div>

            </div>
        </>
    )
}
