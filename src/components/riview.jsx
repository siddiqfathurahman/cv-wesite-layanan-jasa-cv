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
        text: "CV saya sekarang terlihat jauh lebih baik. Terima kasih atas bantuan dan kreativitasnya!",
        author: "Ridho Maria - Klien",
    },
];

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} absolute left-0 z-10 flex items-center justify-center h-full cursor-pointer`}
            onClick={onClick}
        >
            <span className="text-blue-600 text-2xl">❮</span>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} absolute right-0 z-10 flex items-center justify-center h-full cursor-pointer`}
            onClick={onClick}
        >
            <span className="text-blue-600 text-2xl">❯</span>
        </div>
    );
};

const ReviewSlider = () => {
    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="bg-GreenNom p-14 mt-20 mx-20 relative">
            <h1 className="text-3xl text-blue-600 text-center">Apa Kata Pengguna Layanan Kami</h1>
            <Slider {...settings} className="mt-5">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-5">
                        <p className="text-gray-800 max-w-lg mb-4 mx-auto text-center">{review.text}</p>
                        <h2 className="font-semibold text-blue-600">{review.author}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlider;
