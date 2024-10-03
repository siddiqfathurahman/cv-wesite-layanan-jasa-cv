import Line from './Line';
import Button from './Button';

const ServiceItem = ({ imgSrc, title, description }) => (
    <div className='flex items-center mx-14'>
        <img className="w-14" src={imgSrc} alt="" />
        <h1 className='text-4xl max-w-72 font-medium pl-5 text-green-900'>{title}</h1>
        <h2 className='ml-auto max-w-xs'>{description}</h2>
    </div>
);

const Layanan = () => {
    const services = [
        {
            imgSrc: "/utama.png",
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat quibusdam optio dolore eum reiciendis recusandae suscipit, magnam earum iusto?",
        },
        {
            imgSrc: "/utama.png",
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat quibusdam optio dolore eum reiciendis recusandae suscipit, magnam earum iusto?",
        },
        {
            imgSrc: "/utama.png",
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat quibusdam optio dolore eum reiciendis recusandae suscipit, magnam earum iusto?",
        },
        {
            imgSrc: "/utama.png",
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat quibusdam optio dolore eum reiciendis recusandae suscipit, magnam earum iusto?",
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
