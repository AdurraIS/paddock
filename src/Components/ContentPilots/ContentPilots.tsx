

import LeftArrow from '../../assets/Catalog/LeftArrow.svg'
import heartOutline from '../../assets/Catalog/heartOutline.svg'

import { useState, useEffect } from 'react';

import { Icon } from '../../assets/icones/iconesComponent';

export const ContentPilots = () => {

    const [largura, setLargura] = useState('9vw');
    const [position, setPosition] = useState('1vw');
    const [selecionado1, setSelecionado1] = useState('#fff');
    const [selecionado2, setSelecionado2] = useState('#858585');
    const [selecionado3, setSelecionado3] = useState('#858585');

    useEffect(() => {
        console.log('Position atualizado:', position);
    }, [position]);

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
                    <div className="w-[65%] h-[25vw] flex flex-col justify-between ">
                        <div className="flex flex-col justify-evenly space-y-[1vw]">
                            <div className="flex flex-row justify-between w-[70%] ">
                                <p className="p-3 text-[1.4vw] bg-[#ffb800] font-bold rounded-full">50% Off</p>
                                <div className="flex flex-row justify-evenly items-center space-x-4">
                                    <Icon estilo="hover:cursor-pointer" name="heartOutline"></Icon>
                                    <Icon estilo="hover:cursor-pointer" name="share"></Icon>
                                </div>
                            </div>
                            <div><p className="w-[90%] text-[#bdbbbe]  text-[3.3vw]">Lewis Hamilton (Deluxe Edition)</p></div>
                            <div><p className="container w-[100%] flex text-[#646467] text-[1.3vw] items-start font-bold  line-through ">Rp 299.990</p></div>
                            <div><p className=" container w-[100%] flex text-[#EF3331] text-[2vw] items-start font-bold">Rp 149.995</p></div>
                        </div>
                        <div className=" flex flex-row space-x-4 items-center">
                            <Icon name="heartOutline" estilo="p-[1vw] cursor-pointer h-[4vw] rounded-full border border-4 text-[#ef3331]  font-bold border-[#ef3331]" ></Icon>
                            <p className=" text-[1.5vw] cursor-pointer p-[.8vw] rounded-full border border-4 text-[#ef3331] px-[3vw] border-[#ef3331]">+ Add to wallet</p>
                            <p className=" text-[1.5vw] cursor-pointer p-[.8vw] rounded-full border border-4 text-[#ffffff] px-[3vw] font-bold bg-[#ef3331] border-[#ef3331]">Mint Now</p>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[5vh] w-[100%] h-[5vw] flex flex-row items-center bg-[#2A2931] overflow-hidden rounded-full p-[2vw]">
                    <div
                        style={{ left: position, transitionTimingFunction: 'cubic-bezier(.48,0,.38,1.49)', width: largura }}
                        className="transition-position duration-500  h-[3.5vw] bg-red-500 absolute rounded-full">

                    </div>

                    <div className="z-10 flex flex-row space-x-[10vw] justify-around items-start w-[66%]">
                        <p
                            onClick={() => { setPosition('1vw'); setLargura('10vw'); setSelecionado1('#fff'); setSelecionado2('#858585'); setSelecionado3('#858585') }}
                            style={{ color: selecionado1 }}
                            className=" transition-color duration-500 cursor-pointer font-bold uppercase inline-block text-[2vw]">Details
                        </p>
                        <p
                            onClick={() => { setPosition('19vw'); setLargura('9vw'); setSelecionado1('#858585'); setSelecionado2('#fff'); setSelecionado3('#858585') }}
                            style={{ color: selecionado2 }}
                            className="transition-color duration-500 cursor-pointer font-bold uppercase inline-block text-[2vw] text-[#858585]">Review
                        </p>
                        <p
                            onClick={() => { setPosition('36.5vw'); setLargura('15vw'); setSelecionado1('#858585'); setSelecionado2('#858585'); setSelecionado3('#fff') }}
                            style={{ color: selecionado3 }}
                            className="transition-color duration-500 cursor-pointer font-bold uppercase w-[20vw] text-[2vw] text-[#858585]">similar NFTs</p>
                    </div>
                </div>

                <div></div>
            </div >
        </>
    )
}
