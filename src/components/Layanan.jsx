import Line from './Line';
import Button from './Button';

const ServiceItem = ({ imgSrc, title, description }) => (
    <div className='flex items-center mx-14'>
        <img className="w-14" src={imgSrc} alt="" />
        <h1 className='text-4xl max-w-72 font-medium pl-5 text-green-900'>{title}</h1>
        <h2 className='ml-auto max-w-md'>{description}</h2>
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
        <div>
            <h1 className="mt-20 text-center text-2xl justify-center text-green-900 font-semibold">Solusi Kami untuk Anda</h1>
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
            <Button />
        </div>
    );
};

export default Layanan;
