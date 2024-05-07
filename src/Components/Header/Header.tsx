import { useState } from "react"
import { RxAvatar } from "react-icons/rx";
export const Header = () => {
    const [at, setAt] = useState(1);
    const [tokens, setTokens] = useState(0);
    function handleSelect(number: number) {
        setAt(number)
    }
    return (
        <>
            <div className="w-screen text-[16px] text-white min-h-full flex justify-center h-20">
                <ul className="relative flex justify-center gap-4 items-center flex-row">
                    <li className={`${at == 1 ? "text-[#EF3331]" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(1)}>Catalog</button>
                    </li>
                    <li className={`${at == 2 ? "text-[#EF3331]" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(2)}>Team</button>
                    </li>
                    <li className={`${at == 3 ? "text-[#EF3331]" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(3)}>Rank</button>
                    </li>
                    <li className={`${at == 4 ? "text-[#EF3331]" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(4)}>Help</button>
                    </li>
                    <div className="absolute flex flex-row justify-center  gap-4 right-[-20vw] text-[#EF3331]">
                        {tokens} PDK
                        <button>
                            <RxAvatar size="25px"/>
                        </button>
                    </div>

                </ul>

            </div>
        </>
    )
}
