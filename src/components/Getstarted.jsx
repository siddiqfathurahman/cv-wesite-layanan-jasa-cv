import React, { useState } from 'react';
import Line from './Line';
import Button from './Button'; // Pastikan Anda memiliki Button jika digunakan

const Getstartd = ({ title, price, onOpenModal }) => (
    <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-14 p-4 rounded-lg'>
        <h1 className='text-lg md:text-2xl font-medium text-green-900'>{title}</h1>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
            <h2 className='text-lg md:text-xl text-green-900 md:mr-32'>{price}</h2>
            <button 
                className="mt-2 md:mt-0 py-2 md:py-3 items-center justify-center border-2 md:border-4 hover:bg-green-600 hover:text-white px-8 md:px-16 text-green-900 border border-green-600"
                onClick={onOpenModal} // Buka modal saat tombol diklik
            >
                Booking CV
            </button>
        </div>
    </div>
);

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Format pesan yang ingin dikirim
        const message = `Nama: ${name}\nEmail: ${email}`;
        const whatsappUrl = `https://wa.me/6285878954625?text=${encodeURIComponent(message)}`;
        
        // Buka URL WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');

        // Reset form dan tutup modal
        setName('');
        setEmail('');
        onClose();
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">Format Order</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Nama:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
                        Kirim
                    </button>
                    <button type="button" className="mt-2 ml-2 text-gray-600" onClick={onClose}>Tutup</button>
                </form>
            </div>
        </div>
    );
};

const Getstarted = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal

    const services = [
        {
            title: "CV-Start",
            price: "Rp. 49.000",
        },
        {
            title: "CoverMax",
            price: "Rp. 69.000",
        },
        {
            title: "CareerBoost",
            price: "Rp. 89.000",
        },
        {
            title: "CV.Ku Custom",
            price: "Rp. 99.000",
        },
    ];

    return (
        <div id="order" className="mx-4 md:mx-10 mt-10 md:mt-20 p-6 md:p-14 font-poppins">
            <h1 className="text-lg md:text-2xl text-center text-green-900 font-semibold">Mari Mulai</h1>
            <p className="text-center mx-auto max-w-xs md:max-w-lg pt-4">Klik di sini untuk menambahkan teks Anda sendiri dan sesuaikan sesuai kebutuhan dalam penulisan CV Anda.</p>
            <Line />
            {services.map((service, index) => (
                <div key={index}>
                    <Getstartd 
                        title={service.title} 
                        price={service.price} 
                        onOpenModal={() => setIsModalOpen(true)} // Buka modal saat tombol di klik
                    />
                    <Line />
                </div>
            ))}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Getstarted;
