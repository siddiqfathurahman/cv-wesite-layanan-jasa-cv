const Profil = () => {
    return (
        <div className="flex items-center justify-center mt-24 px-24">
            <div className="bg-green-600 h-[515px] p-10 max-w-sm flex flex-col justify-center">
                <h1 className="text-2xl text-white font-bold">Hello, saya George!</h1>
                <h2 className="font-semibold text-white text-2xl">Siap membantu Anda membawa CV dan surat lamaran Anda ke level yang lebih tinggi</h2>
                <p className="text-white pt-2">Dengan pengalaman dan keahlian dalam penulisan dokumen karir, saya akan membantu Anda menyusun CV yang profesional dan memikat, serta surat lamaran yang mampu mencerminkan kualifikasi dan motivasi Anda dengan jelas. Biarkan saya membantu Anda menonjol di mata perekrut dan meningkatkan peluang sukses dalam dunia kerja yang kompetitif!</p>
            </div>
            <div className="pl-5 flex justify-center items-center w-[535px] h-[515px]">
                <img src="/profil.png" alt="" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Profil;
