import { RxAvatar } from "react-icons/rx";
import SearchIcon from '../../assets/Catalog/SearchIcon.svg'
import { InputText } from 'primereact/inputtext';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import star from '../../assets/Catalog/Star.svg'
import heart from '../../assets/Catalog/heart.svg'



export const ContentCatalog = () => {

    let Icones = [1, 2, 3, 4, 5, 6, 7, 8]


    return (
        <>
            <div className="py-[10vh] pb-[10vh] w-[80vw] ">
                <div className="w-[100%] h-[5rem] bg-[#2a2931] mb-[5vh] rounded-full"></div>
                <div className="Container flex flex-row flex-wrap w-[80vw]">
                    {Icones.map((icon, index) => {
                        return (

                            <Link to={'/Piloto'} key={index} className="flex-col w-[19vw] flex p-[1.3rem] bg-[#27262e] rounded-[1rem] m-2 ">

                                <div className="container w-[100%] bg-[#5d5c62] rounded-[1rem] overflow-hidden">
                                    <img src="../../src/assets/image/louis.png" alt="" />
                                </div>
                                <div className="container w-[90%] text-[#bdbbbe] bg-[#27262e]  text-[3vh]">
                                    <p>
                                        Jackson Ask 6JP Men’s Sandals  - Navy
                                    </p>
                                </div>
                                <div className="container w-[100%] flex text-[#646467] items-start font-bold my-4  bg-[#27262e]">

                                    <p>Rp 249.000</p>
                                </div>
                                <div className="container w-[100%] flex-row justify-between  bg-[#27262e]  ">

                                    <div className="flex flex-row">
                                        <img src={star} alt="" />
                                        <p className="mx-2 text-[#646467] font-bold">
                                            4.5/5
                                        </p>
                                    </div>
                                    <img src={heart} alt="" />
                                </div>

                            </Link >

                        )
                    })}
                </div>

            </div >
        </>
    )
}
