const Profil = () => {
    return (
        <div className="flex items-center justify-center mt-24 px-24">
            <div className="bg-green-600 h-[515px] p-10 max-w-sm flex flex-col justify-center">
                <h1 className="text-2xl text-white font-bold">Hello, I’m George!</h1>
                <h2 className="font-semibold text-white text-2xl">Here to take your Social Media to another level</h2>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsa ullam! Sint animi quos, possimus provident beatae explicabo similique magnam ducimus sapiente consequatur dolores placeat unde, nostrum minus perspiciatis sunt.</p>
            </div>
            <div className="pl-5 flex justify-center items-center w-[535px] h-[515px]">
                <img src="/profil.png" alt="" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Profil;
