import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full h-24 flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 transition duration-300 ${scrolled ? 'bg-black bg-opacity-70 backdrop-blur-md' : ''}`}>
            <img src='https://www.zarla.com/images/zarla-top-events-1x1-2400x2400-20211123-4fgq7httf3p79gk64jb6.png' alt='Logo' className="h-16 w-auto bg-white rounded-lg" />
            <div className='flex flex-row font-bold text-lg gap-5 text-white'>
                <div className='flex flex-row items-center justify-center gap-5'>
                    <Link to='/' className='text-white hover:text-gray-200 transition duration-300'>
                        <p>Home</p>
                    </Link>
                    <Link to='/about' className='text-white hover:text-gray-200 transition duration-300'>
                        <p>About Us</p>
                    </Link>
                    <Link to='/services' className='text-white hover:text-gray-200 transition duration-300'>
                        <p>Services</p>
                    </Link>
                    <Link to='/partners' className='text-white hover:text-gray-200 transition duration-300'>
                        <p>Partners</p>
                    </Link>
                    <Link to='/portfolio' className='text-white hover:text-gray-200 transition duration-300'>
                        <p>Portfolio</p>
                    </Link>
                </div>
                <Link to='/contact' className='text-white'>
                    <button className='px-5 py-2 bg-blue-600 rounded-lg cursor-pointer flex items-center justify-center hover:bg-blue-700 transition duration-300'>
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
