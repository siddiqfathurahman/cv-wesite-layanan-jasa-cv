import Line from './Line';
import Button from './Button';

const Getstartd = ({ title, price }) => (
    <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-14 p-4 rounded-lg'>
        <h1 className='text-lg md:text-2xl font-medium text-green-900'>{title}</h1>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
            <h2 className='text-lg md:text-xl text-green-900 md:mr-32'>{price}</h2>
            <button className="mt-2 md:mt-0 py-2 md:py-3 items-center justify-center border-2 md:border-4 hover:bg-green-600 hover:text-white px-8 md:px-16 text-green-900 border border-green-600">
                Booking CV
            </button>
        </div>
    </div>
);

const Getstarted = () => {
    const services = [
        {
            title: "CV-Start",
            price: "$5",
        },
        {
            title: "CoverMax",
            price: "$10",
        },
        {
            title: "CareerBoost",
            price: "$11",
        },
        {
            title: "CV.Ku Custom",
            price: "$15",
        },
    ];

    return (
        <div className="mx-4 md:mx-10 mt-10 md:mt-20 p-6 md:p-14">
            <h1 className="text-lg md:text-2xl text-center text-green-900 font-semibold">Mari Mulai</h1>
            <p className="text-center mx-auto max-w-xs md:max-w-lg pt-4">Klik di sini untuk menambahkan teks Anda sendiri dan sesuaikan sesuai kebutuhan dalam penulisan CV Anda.</p>
            <Line />
            {services.map((service, index) => (
                <div key={index}>
                    <Getstartd 
                        title={service.title} 
                        price={service.price} 
                    />
                    <Line />
                </div>
            ))}
        </div>
    );
};

export default Getstarted;
