
import { InputText } from 'primereact/inputtext';

import {Icon} from '../../assets/icones/iconesComponent';

export const Footer = () => {
    return (
        <div className="w-[100%] bottom-0 flex flex-col justify-between items-center h-[40rem]  bg-[#2a2931] ">
            <div className="w-[80%]  h-[25%] flex flex-row justify-between items-center">
                <Icon name="paddock"></Icon>
                <div className="relative">
                    <InputText placeholder="Subscribe to our newsletter..." name="inputNewLetter" className="rounded-[10rem] bg-[#5d5c62] text-[#d2d2d2] px-8 py-3 text-[15px] w-[20rem] " />
                </div>
            </div>
            <div className="w-[80%] h-[35%] flex flex-row justify-between">

                <div className=" flex flex-col justify-between">
                    <p className="font-bold text-[#fff] text-[1.7vh]  ">Company</p>
                    <p className="text-[#fff] text-[1.2vh]  ">About us</p>
                    <p className="text-[#fff] text-[1.2vh]  ">Our Store</p>
                    <p className="text-[#fff] text-[1.2vh]  ">News</p>
                </div>
                <div className=" flex flex-col justify-between">
                    <p className="font-bold text-[#fff] text-[1.7vh]  ">Help</p>
                    <p className="text-[#fff] text-[1.2vh]  ">FAQ</p>
                    <p className="text-[#fff] text-[1.2vh]  ">Help</p>
                    <p className="text-[#fff] text-[1.2vh]  ">Term</p>
                </div>
                <div className=" flex flex-col justify-between">
                    <p className="  font-bold text-[#fff] text-[1.7vh]">Social Media</p>
                    <div className="flex flex-row space-x-4">
                        <Icon name="facebook" />
                        <p className="text-[#fff] text-[1.2vh]">Facebook</p>
                    </div>
                    <div className="flex flex-row space-x-4" >
                        <Icon name="tiktok" />
                        <p className="text-[#fff] text-[1.2vh]  ">Tiktok</p>
                    </div>
                    <div className="flex flex-row space-x-4" >
                        <Icon name="instagram" />
                        <p className="text-[#fff] text-[1.2vh]  ">Instagram</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-between">
                    <p className="font-bold text-[#fff] text-[1.7vh]  ">Contact</p>
                    <p className="text-[#fff] text-[1.2vh]  ">SPMW 19 Quadra 13 Lote 6 Park Way Brasília DF</p>
                    <p className="text-[#fff] text-[1.2vh]  ">Phone : +55 61 9 8742 9999</p>
                    <p className="text-[#fff] text-[1.2vh]  ">News</p>
                </div>

            </div>
            <div className="w-[100%] h-[20%] bg-[#131218] text-[#d2d2d2] flex flex-row  justify-center items-center"><p>Copyright 2024. Made by a proud team - Lumx Hack Chillz Track</p></div>
        </div >
    )
}
