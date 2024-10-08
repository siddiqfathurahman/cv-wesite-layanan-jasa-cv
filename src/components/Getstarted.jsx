import React, { useState } from 'react';
import Line from './Line';

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

const Modal = ({ isOpen, onClose, serviceTitle }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false); // State untuk menampilkan popup konfirmasi

    const handleSubmit = (e) => {
        e.preventDefault();
        // Format pesan yang ingin dikirim
        const message = `Haii Admin,\n\nSelamat Siang! Saya sangat bersemangat untuk memulai perjalanan karier saya dan ingin memesan jasa pembuatan CV. Berikut detail yang ingin saya sertakan:\n\n**Nama Lengkap:** ${name}\n**Posisi yang Dilamar:** ${position}\n**Pengalaman Kerja:** ${experience}\n**Pendidikan Terakhir:** ${education}\n**Keahlian Khusus:** ${skills}\n\nJika ada format atau informasi tambahan yang diperlukan, mohon informasikan. Terima kasih atas bantuannya! Semoga kita bisa menciptakan CV yang luar biasa bersama.`;
        const whatsappUrl = `https://wa.me/6285878954625?text=${encodeURIComponent(message)}`;
        
        // Buka URL WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');

        // Reset form dan tutup modal
        setName('');
        setPhone('');
        setPosition('');
        setExperience('');
        setEducation('');
        setSkills('');
        onClose();
        
        // Tampilkan popup konfirmasi
        setShowConfirmation(true);
        
        // Sembunyikan popup setelah beberapa detik
        setTimeout(() => setShowConfirmation(false), 5000);
    };

    return (
        <div>
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
                            <label className="block mb-1">Nomor Telepon:</label>
                            <input 
                                type="tel" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Posisi yang Dilamar:</label>
                            <input 
                                type="text" 
                                value={position} 
                                onChange={(e) => setPosition(e.target.value)} 
                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Pengalaman Kerja:</label>
                            <input 
                                type="text" 
                                value={experience} 
                                onChange={(e) => setExperience(e.target.value)} 
                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Pendidikan Terakhir:</label>
                            <input 
                                type="text" 
                                value={education} 
                                onChange={(e) => setEducation(e.target.value)} 
                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Keahlian Khusus:</label>
                            <input 
                                type="text" 
                                value={skills} 
                                onChange={(e) => setSkills(e.target.value)} 
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
            {/* Popup Konfirmasi */}
            {showConfirmation && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 mt-4">
                    <p>Order akan segera diproses oleh admin. Terima kasih telah menggunakan layanan CV.ku!</p>
                </div>
            )}
        </div>
    );
};

const Getstarted = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
    const [selectedService, setSelectedService] = useState(''); // State untuk layanan yang dipilih

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
                        onOpenModal={() => {
                            setSelectedService(service.title); // Set layanan yang dipilih
                            setIsModalOpen(true); // Buka modal
                        }} // Buka modal saat tombol di klik
                    />
                    <Line />
                </div>
            ))}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceTitle={selectedService} />
        </div>
    );
};

export default Getstarted;
