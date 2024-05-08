import { useState } from "react"
import { RxAvatar } from "react-icons/rx";
import SearchIcon from '../../assets/Catalog/SearchIcon.svg'
import { InputText } from 'primereact/inputtext';

import LeftArrow from '../../assets/Catalog/LeftArrow.svg'
import heartOutline from '../../assets/Catalog/heartOutline.svg'

import star from '../../assets/Catalog/Star.svg'
import heart from '../../assets/Catalog/heart.svg'
import share from '../../assets/Catalog/share.svg'

export const ContentPilots = () => {



    return (
        <>
            <div className="py-[5vh] pb-[10vh] w-[80vw] ">
                <div className="flex flex-row w-[100%] text-[#858585] fill-[#858585] space-x-4 font-bold ">
                    <p>Paddock</p>
                    <img className=" fill-[#858585]" src={LeftArrow} alt="" />
                    <p>NFTs</p>
                    <img src={LeftArrow} alt="" />
                    <p>Pilots</p>
                    <img src={LeftArrow} alt="" />
                    <p>Lewis Hamilton (Deluxe Edition)</p>
                </div>
                <div className="mt-[5vh] h-[25vw] flex flex-row justify-between ">
                    <img className="w-[25vw] rounded-[1rem]" src="../../src/assets/image/louis.png" alt="" />
                    <div className="w-[65%] flex flex-col justify-between ">
                        <div className="flex flex-col justify-evenly ">
                            <div className="flex flex-row justify-between w-[70%] ">
                                <p className="p-3 bg-[#ffb800] font-bold rounded-full">50% Off</p>
                                <div className="flex flex-row justify-evenly space-x-4">
                                    <img src={heartOutline} alt="" />
                                    <img src={share} alt="" />
                                </div>
                            </div>
                            <div><p className="w-[90%] text-[#bdbbbe]  text-[6vh]">Lewis Hamilton (Deluxe Edition)</p></div>
                            <div><p className="container w-[100%] flex text-[#646467] text-[2.5vh] items-start font-bold my-4  line-through ">Rp 299.990</p></div>
                            <div><p className=" container w-[100%] flex text-[#EF3331] text-[3vh] items-start font-bold my-4  ">Rp 149.995</p></div>
                        </div>
                        <div className=" flex flex-row space-x-4">
                            <img src={heartOutline} alt="" className=" p-4 rounded-full border border-4 text-[#ef3331]  font-bold border-[#ef3331]" />
                            <p className=" p-4 rounded-full border border-4 text-[#ef3331] px-[3rem] border-[#ef3331]">+ Add to wallet</p>
                            <p className=" p-4 rounded-full border border-4 text-[#ffffff] px-[3rem] font-bold bg-[#ef3331] border-[#ef3331]">Mint Now</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div >
        </>
    )
}
