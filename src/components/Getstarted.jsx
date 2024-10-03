import Line from './Line';
import Button from './Button';

const Getstartd = ({ title, price }) => (
    <div className='flex items-center justify-between mx-14 p-4 rounded-lg'>
        <h1 className='text-2xl font-medium text-green-900'>{title}</h1>
        <div className="flex items-center">
            <h2 className='text-xl text-green-900 mr-32'>{price}</h2>
            <button className="py-3 items-center justify-center border-4 hover:bg-green-600 hover:text-white px-16 text-green-900 border border-green-600 border-spacing-3">
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
        <div className=" mx-10 mt-20 p-14">
            <h1 className="mt-20 text-center text-2xl justify-center text-green-900 font-semibold">Mari Mulai</h1>
            <p className="text-center mx-auto max-w-lg pt-4">Klik di sini untuk menambahkan teks Anda sendiri dan sesuaikan sesuai kebutuhan dalam penulisan CV Anda.</p>
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
