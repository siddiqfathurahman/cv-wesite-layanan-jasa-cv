import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-green-900 text-white py-10 px-5 font-poppins">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
            <h2 className="text-lg font-bold mb-4">Mari Bekerja Bersama</h2>
            <p>Telepon</p>
            <p>123-456-7890</p>
            <p>Email</p>
            <p className="mb-4">Info@mysite.com</p>
            <p>Alamat</p>
            <p>500 Terry Francine St</p>
            <p>San Francisco, CA 94158</p>
        </div>

        <div>
            <h2 className="text-lg font-bold mb-4">Dapatkan Informasi</h2>
                <form className="flex flex-col space-y-4">
            <label htmlFor="email" className="block">
              Masukkan Email Anda *
            </label>
            <input
                type="email"
                id="email"
                className="w-full border-b border-white bg-green-900 text-white p-1 focus:outline-none "
                placeholder="Email"
                required
            />
            <div className="flex items-center">
                <input type="checkbox" id="subscribe" className="mr-2" />
                <label htmlFor="subscribe">Ya, Saya mau berlangganan cv.</label>
            </div>
            <button
                type="submit"
                className="bg-transparent border border-white py-2 px-4 text-white "
            >
                BERLANGGANAN
            </button>
            </form>
        </div>

        <div>
            <h2 className="text-lg font-bold mb-4">Tetap Terhubung</h2>
            <form className="grid grid-cols-2 gap-4">
                <input
                type="text"
                className="border-b border-white bg-green-900 text-white p-1 focus:outline-none "
                placeholder="Nama Depan *"
                required
            />  
            <input
                type="text"
                className="border-b border-white bg-green-900 text-white p-1 focus:outline-none "
                placeholder="Nama Belakang *"
                required
            />
            <input
                type="text"
                className="col-span-2 border-b border-white bg-green-900 text-white p-1 focus:outline-none "
                placeholder="Subjek"
            />
            <textarea
                className="col-span-2 border-b border-white bg-green-900 text-white p-1 focus:outline-none "
                placeholder="Tinggalkan pesan untuk kami..."
            ></textarea>
            <button
                type="submit"
                className="col-span-2 bg-transparent border border-white py-2 px-4 text-white hover:bg-blue-400 hover:text-blue-800 "
            >
                KIRIM
            </button>
            </form>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
