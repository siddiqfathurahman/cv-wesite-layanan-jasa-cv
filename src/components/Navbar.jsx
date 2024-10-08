import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlinePhone } from 'react-icons/ai'; // Import icons

const Navbar = () => {
    return (
    <nav className="bg-black fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-lg w-[90%] md:w-auto">
        <div className="flex items-center justify-between p-2 gap-4">
        <div className="flex-shrink-0 bg-white rounded-md">
            <img
            src="/cv.ku.png" 
            alt="Logo"
            className="h-10 md:h-14" 
            />
        </div>

        
        <div className="flex md:space-x-4 space-x-1">
            <a href="#layanan" className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
                <AiOutlineHome className="h-6 w-6 md:hidden" /> 
                <span className="hidden md:inline">Layanan</span> 
            </a>

            <a href="#About" className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
                <AiOutlineUser className="h-6 w-6 md:hidden" /> 
                <span className="hidden md:inline">About</span> 
            </a>


            <a href="#testimonial" className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
                <AiOutlineMessage className="h-6 w-6 md:hidden" /> 
                <span className="hidden md:inline">Testimonial</span> 
            </a>

            
            <a href="#contact" className="text-white flex items-center justify-center border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
                <AiOutlinePhone className="h-6 w-6 md:hidden" /> 
                <span className="hidden md:inline">Contact</span> 
            </a>
        </div>

    
        <div>
            <a
            href="#order"
            className="text-white font-semibold bg-green-600 md:py-2 text-[15px] md:text-1xl md:px-3 px-2 py-3 md:py-5 md:px-4 rounded-lg"
            >
            Orders
            </a>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;
