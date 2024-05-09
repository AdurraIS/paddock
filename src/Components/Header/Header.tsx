import { useEffect, useState } from "react"
import { RxAvatar } from "react-icons/rx";
import { getBalance } from "../../services/MetaMaskService";
import { Link } from "react-router-dom";
export const Header = ({account}) => {
    const [balance, setBalance] = useState();

    const [at, setAt] = useState(1);
    function handleSelect(number: number) {
        setAt(number)
    }
    function handleBalance(){
        getBalance(account).then((value) => setBalance(value))
        console.log(balance)
    }
    useEffect(()=>{
        if(account){
            handleBalance()
        }
    },[account])
    return (
        <>
            <div className="w-screen text-[16px] container text-white min-h-full items-center flex justify-center h-20">
            
                <ul className="relative flex justify-center gap-4 items-center flex-row"> 
                <h1 className="logo absolute left-[-30vw]"><Link to={"/"}>PADDOCK</Link></h1>
                    <li className={`${at == 1 && account? "text-[#EF3331]" : "text-[#858585]"}`}>
                        {account? (<button onClick={() => handleSelect(1)}><Link to={"/"}>Catalog</Link></button>):
                        (<button><Link to={"/signin"}>Catalog</Link></button>)
                        }     
                    </li>
                    <li className={`${at == 2 && account ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(2)}>Tokens</button>
                    </li>
                    <li className={`${at == 3 && account ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                        <button onClick={() => handleSelect(3)}>NFTs</button>
                    </li>
                    <li className={`${at == 4 && account ? "text-[#EF3331] transition-text duration-300" : "text-[#858585]"}`}>
                    {account? (<button onClick={() => handleSelect(4)}><Link to={"/pilots"}>Pilots</Link></button>):
                        (<button><Link to={"/signin"}>Pilots</Link></button>)
                        }  
                    </li>
                    <div className="flex absolute right-[-30vw] flex-row justify-center items-center  gap-4 text-[#EF3331]">
                        {account ? (
                            <>
                            {balance} PDK
                            <button>
                                <RxAvatar size="25px"/>
                            </button>
                            </>
                        ):(
                            <>
                                <button className="rounded p-2 bg-[#EF3331] text-white"><Link to={"/signin"}>Sign In</Link></button>
                                <button><Link to={"/signup"}>Sign Up</Link></button>
                            </>

                        )}
                        
                    </div>
                </ul>
            </div>
        </>
    )
}
