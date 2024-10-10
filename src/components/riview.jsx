import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const reviews = [
    {
        text: "Layanan pembuatan CV sangat membantu! Prosesnya cepat dan hasilnya memuaskan. Saya mendapatkan pekerjaan dalam waktu singkat.",
        author: "Ali Setiawan - Klien",
    },
    {
        text: "Saya sangat senang dengan CV yang dibuat oleh tim. Desainnya menarik dan informatif. Sangat direkomendasikan!",
        author: "Budi Santoso - Klien",
    },
    {
        text: "Pengalaman saya menggunakan jasa pembuatan CV sangat positif. Mereka sangat profesional dan membantu saya mendapatkan perhatian dari perekrut.",
        author: "Bagus Satria - Klien",
    },
    {
        text: "CV saya sekarang terlihat jauh lebih baik. Terima kasih atas bantuan dan kreativitasnya!!",
        author: "Ridho Maria - Klien",
    },
];

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div id="testimonial" className="bg-GreenNom p-6 md:p-14 mt-10 md:mt-20 mx-4 md:mx-20 relative font-poppins">
            <h1 className="text-2xl md:text-3xl text-green-900 text-center">Apa Kata Pengguna Layanan Kami</h1>
            <Slider {...settings} className="mt-5">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-4 md:px-5">
                        <p className="text-gray-800 max-w-xs md:max-w-lg mb-4 mx-auto text-center text-sm md:text-base">{review.text}</p>
                        <h2 className="font-semibold text-green-900 text-sm md:text-base">{review.author}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlider;
