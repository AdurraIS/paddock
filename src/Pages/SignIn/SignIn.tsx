
import { useState } from "react";
import flyer from "../../assets/SignIn/Flyer.png";
import { getMetaMaskProvider, getAccounts } from "../../services/MetaMaskService.ts";
import { supabase } from "../../services/Supabase.ts";

export const SignIn = ({setAccount}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode fazer o que precisa com o email e a senha, como enviar para um servidor ou validar localmente
        console.log('Email:', email);
        console.log('Senha:', password);
    };
    async function handleMetaMaskSignIn() {
        setMessage('');
        getMetaMaskProvider();
        const accounts:any = getAccounts();
        const account = accounts[0];
        let { data, error } = await supabase
            .from('Usuario')
            .select('email')
            .eq('metamask', account)
        if(error){
            console.error(error)
        }
        if(!data){
            setMessage("You're not registered!")
        } else{
            setAccount(account);
        }

    }
    return (
        <div className="container h-screen">
            <div className="w-full gap-6 flex flex-col px-[14vw] text-[22px] pt-6">
                <h1 className="text-white pl-4">Sign in</h1>
                <div className="w-full bg-[#D8D8D8] h-[1px]"></div>
                <div className="flex flex-row justify-between">
                    <div className="w-[43vw]">
                        <form onSubmit={handleSubmit}>
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
                            <button className="text-[12px] mb-3 text-[#858585]" >Don't have an account yet ?</button>
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
