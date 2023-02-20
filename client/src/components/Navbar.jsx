import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '/Users/linchtong/Desktop/Web3/client/images/logo-prokeii-03.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={'mx-6 cursor-pointer ${classProps'}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className = "w-full flex xl:justify-betweetn 2xl:justify-cente lg:justify-center items-center lg:pl-16 sm:justify-end">
            <div className="2xl:flex-[0.4] md:flex-[0.5] flex-intial justify-center items-center mt-10">
                <img src={logo} alt="logo" className="w-48 cursor-pointer "/>
            </div>
            <div className="flex relative">
                <ul className = "text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                    {["Marketing", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                        <NavbarItem key={item + index} title={item}/>
                    ))}
                    <li className='bg-[#686de0] py-2 px-7 mx-4 font-bold rounded-full cursor-pointer hover:bg-[#4834d4]'>
                        Login
                    </li>
                </ul>
                <div className='py-6'>
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className='text-white lg:hiddent cursor-pointer' onClick={() => setToggleMenu(false)}/> 
                        : <HiMenuAlt4 fontSize={28} className='text-white lg:hiddent cursor-pointer' onClick={() => setToggleMenu(true)}/> 
                    }
                </div>
                {toggleMenu && (
                    <ul 
                        className='z-10 fixed top-0 -right-2 p-3 w-[30vw] h-screen shadow-2xl lg:hiddent list-none
                            flex flex-col justify-start items-end rounded-lg blue-glassmorphism text-white animate-slide-in
                        '
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />                    
                        </li>
                        {["Marketing", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;