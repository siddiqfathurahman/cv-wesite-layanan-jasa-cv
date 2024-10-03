const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 bg-Redcus text-white rounded-xl p-4 w-[30%] flex justify-center">
            <ul className="flex space-x-4">
                <li><a href="#home" className="font-semibold">Home</a></li>
                <li><a href="#about" className="font-semibold">About</a></li>
                <li><a href="#testimonials" className="font-semibold">Testimonials</a></li>
                <li><a href="#order" className="font-semibold">Order</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
