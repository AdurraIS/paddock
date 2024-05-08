import { InputText } from 'primereact/inputtext';

import SearchIcon from '../../assets/Catalog/SearchIcon.svg'

export const InputSearch = ({ search, setSearch }: any) => {
    return (
        <>
            <div className='h-20 relative flex flex-col justify-center'>
                <InputText className="bg-[#2A292F] text-white text-[14px] text-base rounded-full align-center px-10 w-[360px] h-12 p-2" placeholder="Search" maxLength={46} value={search} onChange={(e) => setSearch(e.target.value)} />
                <img className='absolute right-10 size-[18px] hover:scale-[120%] cursor-pointer transition-all duration-300' src={SearchIcon} />
            </div>
        </>
    )
}
