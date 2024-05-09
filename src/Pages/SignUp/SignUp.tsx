import { useState } from "react";
import flyer from "../../assets/SignIn/Flyer.png";
import { getMetaMaskProvider } from "../../services/MetaMaskService.ts";
import { supabase } from "../../services/Supabase.ts";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

export const SignUp = ({ setAccount, account }: any) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {

    event.preventDefault();
    const web3 = await getMetaMaskProvider();
    const accounts = await web3.eth.requestAccounts();

    if (!accounts[0]) {
      setMessage("You need to connect your MetaMask Account!");
      return;
    }

    try {
      let { data, error } = await supabase.from("Usuario").insert({
        email: email,
        username: username,
        fullname: fullname,
        birthdate: date,
        metamask: accounts[0],
        senha: password,
        endereco: address,
      });

      if (error) {
        console.error(error);
        return;
      }
      setAccount(accounts[0])
    } catch (error) {
      console.error(error);
    }
    navigate("/")
  }

  return (
    <div className="container h-screen">
      <div className="w-full gap-6 flex flex-col px-[14vw] text-[22px] pt-6">
        <h1 className="text-white pl-4">Sign Up</h1>
        <div className="w-full bg-[#D8D8D8] h-[1px]"></div>
        <div className="flex flex-row justify-between">
          <div className="w-[43vw]">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-row gap-8 mb-6">
                <div className="flex flex-col w-[50%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="fullname"
                  >
                    Full name*
                  </label>
                  <input
                    className="rounded bg-[#28272F]
                            text-[#858585] text-[14px] py-2 px-4"
                    type="text"
                    placeholder="full name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="username"
                  >
                    Username*
                  </label>
                  <input
                    className="rounded bg-[#28272F]
                                text-[#858585] text-[14px] py-2 px-4"
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-8 mb-6">
                <div className="flex flex-col w-[50%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="date"
                  >
                    Date of birth*
                  </label>
                  <InputMask
                    className="rounded bg-[#28272F] text-[#858585] text-[14px] py-2 px-4"
                    mask="99/99/9999"
                    value={date}
                    name="data"
                    onChange={(e: any) => setDate(e.target.value)}
                    placeholder="00/00/0000"
                    required
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    className="rounded bg-[#28272F]
                                text-[#858585] text-[14px] py-2 px-4"
                    type="email"
                    name="email"
                    placeholder="example@paddock.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-8 mb-6">
                <div className="flex flex-col w-[50%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="password"
                  >
                    Password*
                  </label>
                  <input
                    className="rounded bg-[#28272F]
                            text-[#858585] text-[14px] py-2 px-4"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password*
                  </label>
                  <input
                    className="rounded bg-[#28272F]
                                text-[#858585] text-[14px] py-2 px-4"
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="w-full bg-[#D8D8D8] h-[1px] mt-8 mb-4"></div>
              <div className="flex flex-row gap-8 mb-6">
                <div className="flex flex-col w-[100%]">
                  <label
                    className="text-[14px] mb-3 text-[#EF3331]"
                    htmlFor="address"
                  >
                    Address*
                  </label>
                  <input
                    className="rounded bg-[#28272F]
                            text-[#858585] text-[14px] py-2 px-4"
                    type="text"
                    placeholder="Av. Brigadeiro Faria Lima SP"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                className="w-full text-[20px] rounded bg-[#EF3331] text-white text-center justify-center py-2 mb-6"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="flex flex-row justify-between  px-2">
              <button className="text-[12px] mb-3 text-[#EF3331]">
                Forgot Password ?
              </button>
              <button className="text-[12px] mb-3 text-[#858585]">
                Don't have an account yet ?
              </button>
            </div>
          </div>
          <div className="w-[25vw]">
            <img src={flyer} />
          </div>
        </div>
      </div>
    </div>
  );
};
