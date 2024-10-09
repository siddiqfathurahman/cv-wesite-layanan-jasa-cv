import React, { useState } from 'react';
import Line from './Line';

const Getstartd = ({ title, price, onOpenModal }) => (
    <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-14 p-4 rounded-lg'>
        <h1 className='text-lg md:text-2xl font-medium text-green-900'>{title}</h1>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
            <h2 className='text-lg md:text-xl text-green-900 md:mr-32'>{price}</h2>
            <button 
                className="mt-2 md:mt-0 py-2 md:py-3 items-center justify-center border-2 md:border-4 hover:bg-green-600 hover:text-white px-8 md:px-16 text-green-900 border border-green-600"
                onClick={onOpenModal}
            >
                Booking CV
            </button>
        </div>
    </div>
);

const Modal = ({ isOpen, onClose, serviceTitle, servicePrice }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [selectedService, setSelectedService] = useState(serviceTitle);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Haii Admin,\n\nSelamat Siang! Saya sangat bersemangat untuk memulai perjalanan karier saya dan ingin memesan jasa pembuatan CV. Berikut detail yang ingin saya sertakan:\n\n*Nama Lengkap:* ${name}\n*Layanan yang Dipilih:* ${selectedService}\n*Harga yang Harus Dibayar:* ${servicePrice}\n*Nomor Telepon:* ${phone}\n*Email:* ${email}\n*Posisi yang Dilamar:* ${position}\n*Pengalaman Kerja:* ${experience}\n*Pendidikan Terakhir:* ${education}\n*Keahlian Khusus:* ${skills}\n\nJika ada format atau informasi tambahan yang diperlukan, mohon informasikan. Terima kasih atas bantuannya! Semoga kita bisa menciptakan CV yang luar biasa bersama.`;
        const whatsappUrl = `https://wa.me/6285878954625?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setName('');
        setPhone('');
        setPosition('');
        setExperience('');
        setEducation('');
        setSkills('');
        setEmail('');
        onClose();
        setShowConfirmation(true);
    };

    return (
        <div>
            <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
                <div className="bg-white z-50 p-5 rounded-lg shadow-lg w-11/12 md:w-1/3 max-w-lg" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Format Order</h2>
                        <button className="text-xl" onClick={onClose}>×</button>
                    </div>
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
                            <label className="block mb-1">Layanan yang Dipilih:</label>
                            <select 
                                value={selectedService} 
                                onChange={(e) => setSelectedService(e.target.value)} 
                                className="border rounded w-full p-2"
                            >
                                <option value="CV-Start">CV-Start</option>
                                <option value="CoverMax">CoverMax</option>
                                <option value="CareerBoost">CareerBoost</option>
                                <option value="CV.Ku Custom">CV.Ku Custom</option>
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                            <div className="md:w-1/2">
                                <label className="block mb-1">Nomor Telepon:</label>
                                <input 
                                    type="tel" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2">
                                <label className="block mb-1">Email:</label>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                            <div className="md:w-1/2">
                                <label className="block mb-1">Posisi yang Dilamar:</label>
                                <input 
                                    type="text" 
                                    value={position} 
                                    onChange={(e) => setPosition(e.target.value)} 
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2">
                                <label className="block mb-1">Pengalaman Kerja:</label>
                                <input 
                                    type="text" 
                                    value={experience} 
                                    onChange={(e) => setExperience(e.target.value)} 
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                            <div className="md:w-1/2">
                                <label className="block mb-1">Pendidikan Terakhir:</label>
                                <input 
                                    type="text" 
                                    value={education} 
                                    onChange={(e) => setEducation(e.target.value)} 
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2">
                                <label className="block mb-1">Keahlian Khusus:</label>
                                <input 
                                    type="text" 
                                    value={skills} 
                                    onChange={(e) => setSkills(e.target.value)} 
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-green-600 text-white py-2 px-4 w-full rounded">
                            Kirim
                        </button>
                    </form>
                </div>
            </div>
            {showConfirmation && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 p-4 rounded-lg shadow-lg z-50 w-11/12 md:w-1/3 max-w-lg">
                    <div className="flex justify-between items-center">
                        <h1 className="text-center font-bold text-2xl">Terimakasih Telah Menggunakan Layanan CV.KU</h1>
                        <button className="text-xl" onClick={() => setShowConfirmation(false)}>×</button>
                    </div>
                    <img src="/check-icon.png" alt="" className="mx-auto py-2 w-36"/>
                    <p className="text-center">Order akan segera diproses oleh admin.</p>
                </div>
            )}
        </div>
    );
};

const Getstarted = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

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
            <h1 className="text-lg md:text-2xl text-center text-green-900 font-semibold">Mari Mulai Buat CV-mu Sekarang!</h1>
            <Line />
            {services.map((service, index) => (
                <Getstartd
                    key={index}
                    title={service.title}
                    price={service.price}
                    onOpenModal={() => {
                        setSelectedService(service.title);
                        setSelectedPrice(service.price);
                        setIsModalOpen(true);
                    }}
                />
            ))}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceTitle={selectedService}
                servicePrice={selectedPrice}
            />
        </div>
    );
};

export default Getstarted;
