const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 w-full md:top-4 md:bottom-auto md:left-1/2 md:transform md:-translate-x-1/2 md:w-[40%] bg-Redcus text-white rounded-t-xl md:rounded-xl p-4 z-10">
            <ul className="flex justify-around md:justify-center space-x-4">
                <li className="mx-4 md:mx-0"><a href="#home" className="font-semibold">Home</a></li>
                <li className="mx-4 md:mx-0"><a href="#about" className="font-semibold">About</a></li>
                <li className="mx-4 md:mx-0"><a href="#testimonials" className="font-semibold">Testimonials</a></li>
                <li className="mx-4 md:mx-0"><a href="#order" className="font-semibold">Order</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
