
import { useState } from "react";
import flyer from "../../assets/SignIn/Flyer.png";
import { Footer } from "../../Components/Footer/Footer";
export const ContactUs = () => {
    const [Name, setEmail] = useState('');
    const [email, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        console.log('email enviado!')
    }
    const handleSendMail = () => {
        console.log('email enviado!')
    }

    return (
        <div className="overflow-x-hidden">
            <div className="container h-screen">
                <div className="w-full gap-6 flex flex-col px-[14vw] text-[22px] pt-6">
                    <h1 className="text-white pl-4">Contact Us</h1>
                    <div className="w-full bg-[#D8D8D8] h-[1px]"></div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[43vw]">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex flex-col w-[100%]">
                                        <label className="text-[14px] mb-3 text-[#EF3331]" htmlFor="email">Email*</label>
                                        <input
                                            className="rounded bg-[#28272F]
                            text-[#858585] text-[14px] py-2 px-4"
                                            type="email"
                                            id="email"
                                            value={email}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col w-[100%]">
                                        <label className="text-[14px] mb-3 text-[#EF3331]" htmlFor="password">Senha*</label>
                                        <input
                                            className="rounded bg-[#28272F]
                                text-[#858585] text-[14px] py-2 px-4"
                                            type="password"
                                            id="password"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2 flex flex-col w-[100%] ">
                                        <label className=" text-[14px] mb-3 text-[#EF3331]" htmlFor="password">message*</label>
                                        <textarea
                                            className="rounded bg-[#28272F]
                                text-[#858585] text-[14px] py-2 px-4 h-[30vw]"
                                            type="textarea"
                                            id="password"
                                            required
                                        />
                                    </div>
                                </div>
                                <button className="w-full text-[20px] rounded bg-[#EF3331] text-white text-center justify-center py-2 mb-6 hover:scale-[103%] transition-all duration-150" type="submit">Send Mail</button>

                            </form>
                            <div className="flex flex-row justify-between  px-2">
                                <button className="text-[12px] mb-3 text-[#EF3331]" >Precisa de ajuda ?</button>
                                <button className="text-[12px] mb-3 text-[#858585]" >tem algum problema ?</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer ></Footer>
        </div>

    );
}
