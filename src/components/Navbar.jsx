import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-lg w-full md:w-1/2">
      <div className="flex items-center justify-between p-2 gap-4">
        
        {/* Logo */}
        <div className="flex-shrink-0 bg-white rounded-md">
          <img
            src="/cv.ku.png" 
            alt="Logo"
            className="h-10 md:h-14" // Ubah ukuran logo untuk versi mobile
          />
        </div>

        {/* Menu */}
        <div className="flex space-x-4">
            <a href="#layanan" className="text-white border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
              Layanan
            </a>
            <a href="#About" className="text-white border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
              About
            </a>
            <a href="#testimonial" className="text-white border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
              Testimonial
            </a>
            <a href="#contact" className="text-white border border-white bg-transparent px-2 md:px-3 py-1 md:py-2 rounded-md text-center tracking-wide">
              Contact
            </a>
        </div>

        {/* Button "Order" */}
        <div>
          <a
            href="#order"
            className="text-white font-semibold bg-Redcus py-2 px-3 md:py-5 md:px-4 rounded-lg" // Ubah ukuran tombol untuk versi mobile
          >
            Orders
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
