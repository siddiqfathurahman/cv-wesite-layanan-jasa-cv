import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlinePhone, AiFillInstagram, AiOutlineWhatsApp, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showIcons, setShowIcons] = useState(false); 
    const [lastScrollY, setLastScrollY] = useState(0); 
    const [scrollDirection, setScrollDirection] = useState('up'); 
    const [isFirstLoad, setIsFirstLoad] = useState(true); 

    const offsetValue = 90;

    useEffect(() => {
        setTimeout(() => {
            setIsFirstLoad(false);
        }, 1000); 
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down'); 
            } else {
                setScrollDirection('up'); 
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleLogoClick = () => {
        setShowIcons(!showIcons); 
    };

    return (
        <nav className={`bg-black fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 rounded-lg shadow-lg w-[90%] md:w-auto transition-transform duration-500 ${isFirstLoad ? 'translate-y-20' : scrollDirection === 'down' ? 'translate-y-20' : 'translate-y-0'}`}>
            <div className="flex items-center justify-between p-2 gap-4">
                <div className="flex-shrink-0 bg-white rounded-md relative">
                    <img
                        src="/cv.ku.png" 
                        alt="Logo"
                        className="h-10 md:h-14 cursor-pointer"
                        onClick={handleLogoClick} 
                    />
                    {showIcons && (
                        <div className={`absolute md:ml-60 ml-32 bg-black left-1/2 transform -translate-x-1/2 -top-10 flex space-x-2 py-2 rounded-xl px-6 transition-transform transition-opacity duration-300 ease-in-out opacity-100 scale-100`}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <AiFillInstagram className="h-6 w-6" />
                            </a>
                            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-white">
                                <AiOutlineWhatsApp className="h-6 w-6" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <AiFillFacebook className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <AiFillLinkedin className="h-6 w-6" />
                            </a>
                        </div>
                    )}
                </div>

                <div className="flex md:space-x-4 space-x-1">
                    <Link 
                        to="layanan" 
                        smooth={true} 
                        duration={500} 
                        offset={-offsetValue} 
                        className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide cursor-pointer"
                    >
                        <AiOutlineHome className="h-6 w-6 md:hidden" /> 
                        <span className="hidden md:inline">Layanan</span> 
                    </Link>

                    <Link 
                        to="About" 
                        smooth={true} 
                        duration={500} 
                        offset={-offsetValue} 
                        className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide cursor-pointer"
                    >
                        <AiOutlineUser className="h-6 w-6 md:hidden" /> 
                        <span className="hidden md:inline">About</span> 
                    </Link>

                    <Link 
                        to="testimonial" 
                        smooth={true} 
                        duration={500} 
                        offset={-offsetValue} 
                        className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide cursor-pointer"
                    >
                        <AiOutlineMessage className="h-6 w-6 md:hidden" /> 
                        <span className="hidden md:inline">Review</span> 
                    </Link>

                    <Link to="contact" smooth={true} duration={500} className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide cursor-pointer">
                        <AiOutlinePhone className="h-6 w-6 md:hidden" /> 
                        <span className="hidden md:inline">Contact</span> 
                    </Link>
                </div>

                <div>
                    <Link
                        to="order" 
                        smooth={true}
                        duration={500}
                        className="text-white font-semibold bg-green-600 md:py-2 text-[12px] md:text-1xl md:px-3 px-2 py-3 md:py-5 md:px-4 rounded-lg"
                    >
                        Orders
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
