import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = ['GALLERY', 'PHILOSOPHY', 'MONUMENT'];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-void/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6 md:py-8'}`}>
            <div className="container mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="font-display text-xl md:text-2xl tracking-[0.2em] text-white z-50">
                    ZEUS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12">
                    {navLinks.map((item) => (
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

                {/* Desktop CTA */}
                <Link
                    to="/backrooms"
                    className="hidden md:block px-6 py-2 border border-white/20 text-xs tracking-[0.2em] text-white hover:bg-white hover:text-void transition-all duration-500"
                >
                    BACKROOMS
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden z-50 p-2 text-white hover:text-electric transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-void flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {/* Background Noise */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                            <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
                        </div>

                        {navLinks.map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                className="font-display text-3xl tracking-[0.1em] text-white hover:text-electric transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                to="/backrooms"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-3 border border-white/20 text-sm tracking-[0.2em] text-white hover:bg-white hover:text-void transition-all duration-300"
                            >
                                ENTER ARCHIVE
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
