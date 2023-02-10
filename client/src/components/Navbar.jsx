import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '/Users/linchtong/Desktop/Web3/client/images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProps'}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className = "w-full flex lg:justify-center justify-between items-center p-4">
            <div className="lg:flex-[0.5] flex-intial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
            </div>
            <ul className = "text-white lg:flex sm:hidden list-none flex-row justify-between items-center flex-initial">
                {["Marketing", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item}/>
                ))}
                <li className='bg-[#686de0] py-2 px-7 mx-4 font-bold rounded-full cursor-pointer hover:bg-[#4834d4]'>
                    Login
                </li>
            </ul>
            <div className="flex relative">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className='text-white lg:hiddent cursor-pointer' onClick={() => setToggleMenu(false)}/> 
                    : <HiMenuAlt4 fontSize={28} className='text-white lg:hiddent cursor-pointer' onClick={() => setToggleMenu(true)}/> 
                }
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