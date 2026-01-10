import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-void/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
                <div className="font-display text-2xl tracking-[0.2em] text-white">
                    ZEUS
                </div>

                <div className="hidden md:flex space-x-12">
                    {['GALLERY', 'PHILOSOPHY', 'MONUMENT'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs tracking-[0.25em] text-stone-400 hover:text-white transition-colors duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-full opacity-50"></span>
                        </a>
                    ))}
                </div>

                <Link
                    to="/backrooms"
                    className="hidden md:block px-6 py-2 border border-white/20 text-xs tracking-[0.2em] text-white hover:bg-white hover:text-void transition-all duration-500"
                >
                    BACKROOMS
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
