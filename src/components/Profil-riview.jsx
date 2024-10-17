const Profil = () => {
    return (
        <div id="About" className="flex flex-col md:flex-row items-center justify-center mt-10 px-4 md:px-24 font-poppins">
            <div className="bg-green-600 p-8 md:p-10 max-w-full md:max-w-sm flex flex-col justify-center h-auto md:h-[515px]">
                <h1 className="text-xl md:text-2xl text-white font-bold">Hello, saya Fathurahman!</h1>
                <h2 className="font-semibold text-lg md:text-2xl text-white mt-4 md:mt-2">Siap membantu Anda membawa CV dan surat lamaran Anda ke level yang lebih tinggi</h2>
                <p className="text-white text-sm md:text-base pt-4 md:pt-2">Dengan pengalaman dan keahlian dalam penulisan dokumen karir, saya akan membantu Anda menyusun CV yang profesional dan memikat, serta surat lamaran yang mampu mencerminkan kualifikasi dan motivasi Anda dengan jelas. Biarkan saya membantu Anda menonjol di mata perekrut dan meningkatkan peluang sukses dalam dunia kerja yang kompetitif!</p>
            </div>
            <div className="pt-6 md:pt-0 md:pl-5 flex justify-center items-center w-full md:w-[535px] h-auto md:h-[515px]">
                <img src="/me.png" alt="Profil George" className="w-full max-w-xs md:max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Profil;
