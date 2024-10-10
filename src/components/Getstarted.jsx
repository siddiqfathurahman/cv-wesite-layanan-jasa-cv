import React, { useState } from 'react';
import Get from './pages/Get';
import Modal from './pages/Modal';
import Line from './Line';

const Getstarted = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

    const services = [
        { title: "CV-Start", price: "Rp. 49.000" },
        { title: "CoverMax", price: "Rp. 69.000" },
        { title: "CareerBoost", price: "Rp. 89.000" },
        { title: "CV.Ku Custom", price: "Rp. 99.000" },
    ];

    return (
        <div id="order" className="mx-4 md:mx-10 mt-10 md:mt-20 p-6 md:p-14 font-poppins">
            <h1 className="text-lg md:text-2xl text-center text-green-900 font-semibold">Mari Mulai Buat CV-mu Sekarang!</h1>
            {services.map((service, index) => (
                <div key={index}>
                    <Line />
                    <Get
                        title={service.title}
                        price={service.price}
                        onOpenModal={() => {
                            setSelectedService(service.title);
                            setSelectedPrice(service.price);
                            setIsModalOpen(true);
                        }}
                    />
                </div>
            ))}
            <Line />
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
