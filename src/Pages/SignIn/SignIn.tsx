
import { useState, useEffect } from "react";
import flyer from "../../assets/SignIn/Flyer.png";
import { getMetaMaskProvider} from "../../services/MetaMaskService.ts";
import { supabase } from "../../services/Supabase.ts";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const SignIn = ({setAccount, account}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

   

    async function handleSubmit(event) {
        event.preventDefault();
        const web3 = await getMetaMaskProvider();
        const accounts = await web3.eth.requestAccounts();
        const account = accounts[0];
        try {
            let { data, error } = await supabase
                .from('Usuario')
                .select('email')
                .eq('senha', password);
    
            if (error) {
                console.error(error);
                return; 
            }
            if (!data?.length) {
                setMessage("Invalid Email or Passowrd!");
            } else {
                setAccount(account);
            }
        } catch (error) {
            console.error(error);
        }
        navigate("/")
    };

    async function handleMetaMaskSignIn() {
        setMessage('');
        const web3 = await getMetaMaskProvider();
        const accounts = await web3.eth.requestAccounts();
        const account = accounts[0];
        try {
            let { data, error } = await supabase
                .from('Usuario')
                .select('email')
                .eq('metamask', account);
    
            if (error) {
                console.error(error);
                return; 
            }
            if (!data?.length) {
                setMessage("You're not registered!");
            } else {
                setAccount(account);
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="container h-screen">
            <div className="w-full gap-6 flex flex-col px-[14vw] text-[22px] pt-6">
                <h1 className="text-white pl-4">Sign in</h1>
                <div className="w-full bg-[#D8D8D8] h-[1px]"></div>
                <div className="flex flex-row justify-between">
                    <div className="w-[43vw]">
                        <form onSubmit={()=> handleSubmit(event)}>
                            <div className="flex flex-row gap-8 mb-6">
                                <div className="flex flex-col w-[50%]">
                                    <label className="text-[14px] mb-3 text-[#EF3331]" htmlFor="email">Email*</label>
                                    <input
                                        className="rounded bg-[#28272F]
                            text-[#858585] text-[14px] py-2 px-4"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col w-[50%]">
                                    <label className="text-[14px] mb-3 text-[#EF3331]" htmlFor="password">Senha*</label>
                                    <input
                                        className="rounded bg-[#28272F]
                                text-[#858585] text-[14px] py-2 px-4"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </div>
                            </div>
                            <button className="w-full text-[20px] rounded bg-[#EF3331] text-white text-center justify-center py-2 mb-6" type="submit">Sign in</button>

                        </form>
                        <div className="flex flex-row justify-between  px-2">
                            <button className="text-[12px] mb-3 text-[#EF3331]" >Forgot Password ?</button>
                            <button className="text-[12px] mb-3 text-[#858585]" ><Link to={"/signup"}>Don't have an account yet ?</Link></button>
                        </div>
                        <div className="w-full text-[20px] rounded text-white text-center justify-center mb-6 flex flex-col gap-6">
                            <p className="text-[12px]">Or</p>
                            <button onClick={() => handleMetaMaskSignIn()} className="w-full rounded border-[2px] border-[#f6851b] text-[#f6851b]  py-2">Sign In with MetaMask </button>
                            <p className="text-[12px] text-red-600">{message}</p>
                        </div>

                    </div>
                    <div className="w-[25vw]">
                        <img src={flyer} />
                    </div>
                </div>
            </div>
        </div>
    );
}
