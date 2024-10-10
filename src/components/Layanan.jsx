import Line from './Line';
import Button from './Button';

const ServiceItem = ({ imgSrc, title, description }) => (
    <div className='flex flex-col md:flex-row items-center mx-4 md:mx-14 my-6 font-poppins'>
        <img className="w-20 mb-4 md:mb-0 md:w-14" src={imgSrc} alt="" />
        <h1 className='text-xl md:text-4xl max-w-xs md:max-w-72 font-medium pl-0 md:pl-5 text-green-900'>{title}</h1>
        <h2 className='mt-4 md:mt-0 md:ml-auto text-sm md:text-base max-w-full md:max-w-md text-center md:text-left'>{description}</h2>
    </div>
);

const Layanan = () => {
    const services = [
        {
            imgSrc: "/1.png",
            title: "CV-Start",
            description: "Layanan konsultasi dasar penulisan CV untuk fresh graduates dirancang untuk membantu lulusan baru menyusun CV yang efektif dan profesional. Kami membimbing mereka dalam menyoroti pengalaman magang, keterampilan, serta proyek yang relevan, meskipun pengalaman kerja masih terbatas",
        },
        {
            imgSrc: "/2.png",
            title: "CoverMax ",
            description: "Layanan solusi penulisan surat lamaran yang memikat bertujuan membantu pelamar kerja menulis surat lamaran yang kuat dan persuasif. Kami memberikan panduan dalam menyusun surat lamaran yang menonjolkan kualifikasi, pengalaman, serta motivasi pelamar dengan jelas dan efektif",
        },
        {
            imgSrc: "/3.png",
            title: "CareerBoost ",
            description: "Layanan Paket Revisi dan Optimalisasi CV untuk Profesional dirancang untuk membantu para pekerja yang sudah berpengalaman memperbarui dan menyempurnakan CV mereka agar lebih relevan dengan tuntutan industri saat ini.",
        },
        {
            imgSrc: "/4.png",
            title: "CV.Ku Custom",
            description: "Layanan Penulisan CV dan Surat Lamaran yang Disesuaikan dengan Kebutuhan Karir Anda menawarkan solusi personal dalam menyusun dokumen lamaran kerja yang tepat sasaran",
        },
    ];

    return (
        <div id="layanan" className="px-4 md:px-20">
            <h1 className="mt-20 font-poppins text-center text-2xl md:text-4xl justify-center text-green-900 font-semibold">Solusi Kami untuk Anda</h1>
            <Line />
            {services.map((service, index) => (
                <div key={index}>
                    <ServiceItem 
                        imgSrc={service.imgSrc} 
                        title={service.title} 
                        description={service.description} 
                    />
                    <Line />
                </div>
            ))}
            <div className="flex justify-center items-center"> {/* Menggunakan h-screen untuk mengatur tinggi kontainer */}
            <button 
                className="py-3 border-4 hover:bg-green-600 hover:text-white px-16 md:px-36 text-green-900 bg-white border border-green-600"
                onClick={() => document.getElementById('order').scrollIntoView({ behavior: 'smooth' })}
            >
            Booking Cv
            </button>
        </div>
        </div>
    );
};

export default Layanan;
