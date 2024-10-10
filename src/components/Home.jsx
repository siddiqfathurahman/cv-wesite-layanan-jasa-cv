const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center mt-10 font-poppins">
            <div className="px-4 md:pl-20 max-w-2xl pt-10 md:pt-20 text-center md:text-left">
                <h1 className="text-3xl md:text-7xl text-left font-medium text-green-900">Raih Kesempatan Emas dengan CV yang Menggoda</h1>
                <div className="pt-6 md:pt-10">
                <button 
                    className="py-3 border-4 hover:bg-green-600 hover:text-white px-16 md:px-36 text-green-900 bg-white border border-green-600"
                    onClick={() => document.getElementById('order').scrollIntoView({ behavior: 'smooth' })}
                >
                Ayo Pesan CV Anda!
                </button>

                </div>
            </div>
            <div className="px-4 md:pl-28">
                <img src="/utama.png" alt="Gambar Utama" className="w-full md:w-[570px] mb-6 md:mb-0" />
            </div>
        </div>
    );
};

export default Home;
