import { Link } from 'react-router-dom';

import star from '../../assets/Catalog/Star.svg'
import heart from '../../assets/Catalog/heart.svg'
import { useState } from 'react';
export const ContentCatalog = () => {

    let Icones = [
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
    ]

    const [items, setItems] = useState(Icones.length)
    const [linhas, setLinhas] = useState(2)

    return (
        <>
            <div className="py-[10vh] pb-[10vh] w-[70vw] ">
                <div className="w-[100%] h-[5rem] bg-[#2a2931] mb-[5vh] rounded-full"></div>
                < div className="grid w-[100%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1vw w-80vw mx-auto gap-3 relative">
                    <div onClick={() => { setLinhas(linhas + 1) }} className='absolute bottom-[1vw] left-[50%] text-[#fff] font-bold p-[1vw] px-[1.5vw] translate-x-[-50%] text-[2vw] bg-[#EF3331] rounded-full hover:scale-110 transition-all duration-150 cursor-pointer shadow-2xl shadow-[#ffffff2c] '> <p>Mais</p></div>
                    {
                        Icones.map((icon, index) => {
                            if (index / 4 < linhas) {
                                return (

                                    <Link to={'/pilots'} key={index} className='transition-all duration-1000'>
                                        <div className="flex-col space-y-[2vh] w-[100%] flex p-[1.3rem] bg-[#27262e] rounded-[1rem] m-2  ">

                                            <div className=" w-[100%] h-[30%] rounded-[1rem] overflow-hidden">
                                                <img src="../../src/assets/image/louis.png" alt="" />
                                            </div>
                                            <div className=" w-[90%] text-[#bdbbbe] bg-[#27262e]  text-[1.5vw]">
                                                <p>
                                                    Jackson Ask 6JP Men’s Sandals  - Navy
                                                </p>
                                            </div>
                                            <div className=" w-[100%] flex text-[#646467] items-start font-bold  bg-[#27262e]">
                                                <p>Rp 249.000</p>
                                            </div>
                                            <div className="w-[100%] flex-row flex  justify-between    ">

                                                <div className="flex flex-row">
                                                    <img src={star} alt="" />
                                                    <p className="mx-2 text-[#646467] font-bold">
                                                        4.5/5
                                                    </p>
                                                </div>

                                                <img src={heart} alt="" />
                                            </div>
                                        </div>
                                    </Link >

                                )
                            }
                            else { return (<div className='h-[0px] scale-0'></div>) }
                        })}
                </div>

            </div >
        </>
    )
}
