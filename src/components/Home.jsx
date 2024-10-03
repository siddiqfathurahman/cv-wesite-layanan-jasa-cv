const Home = () => {
    return (
        <div className="flex mt-10">
            <div className="pl-20 max-w-xl pt-56">
                <h1 className="text-6xl font-semibold text-green-900">Wujudkan Karier Impian dengan CV yang Memukau</h1>
                <div className="pt-10">
                    <button className="py-3 border-4 hover:bg-green-900 hover:text-white px-36 text-green-900 bg-white border border-green-600 border-spacing-3">
                    Ayo Pesan CV Anda!
                    </button>
                </div>
            </div>
            <div className="pl-28">
                <img src="/utama.png" alt="" className="w-[570px]" />
            </div>
        </div>
    );
};

export default Home;