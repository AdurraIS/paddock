import { useEffect, useState } from "react"
import { RxAvatar } from "react-icons/rx";
import { getBalance } from "../../services/MetaMaskService";

export const Header = ({account}) => {
    const [balance, setBalance] = useState();

    const [at, setAt] = useState(1);
    function handleSelect(number: number) {
        setAt(number)
    }
    function handleBalance(){
        getBalance(account).then((balance) => setBalance(balance))
    }
    useEffect(()=>{
        handleBalance()
    },[])
    return (
        <>
            <div className="w-screen text-[16px] container text-white min-h-full items-center flex justify-center h-20">
            
                <ul className="relative flex justify-center gap-4 items-center flex-row"> 
                <h1 className="logo absolute left-[-30vw]">PADDOCK</h1>
                    <li className={`${at == 1 ? "text-[#EF3331]" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(1)}>Catalog</button>
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
                    <div className="flex absolute right-[-30vw] flex-row justify-center items-center  gap-4 text-[#EF3331]">
                        {balance} PDK
                        <button>
                            <RxAvatar size="25px"/>
                        </button>
                    </div>
                </ul>
            </div>
        </>
    )
}
