import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-void text-stone-500 py-12 md:py-20 border-t border-white/5 relative overflow-hidden">

            <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center">

                {/* Logo / Brand */}
                <div className="mb-12 text-center">
                    <h2 className="font-display text-2xl text-white tracking-[0.2em]">ASCENDANT</h2>
                    <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 block mt-2">D I G I T A L &nbsp; M O N U M E N T</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 text-xs tracking-[0.2em] font-light">
                    <a href="#" className="hover:text-electric transition-colors duration-300">MANIFESTO</a>
                    <a href="#" className="hover:text-electric transition-colors duration-300">GALLERY</a>
                    <a href="#" className="hover:text-electric transition-colors duration-300">SUPPORTERS</a>
                    <a href="#" className="hover:text-electric transition-colors duration-300">CONTACT</a>
                </div>

                {/* Socials / Minimal Icons */}
                <div className="flex gap-8 mb-16">
                    <a href="#" className="group w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-electric transition-colors duration-300">
                        <svg className="w-4 h-4 group-hover:text-electric transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </a>
                    <a href="#" className="group w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-electric transition-colors duration-300">
                        <svg className="w-4 h-4 group-hover:text-electric transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>

                {/* Copyright / Bottom Text */}
                <div className="flex flex-col items-center gap-2 text-[10px] tracking-widest opacity-30 font-light">
                    <p>&copy; 2026 ASCENDANT SERIES. ALL RIGHTS RESERVED.</p>
                    <p>DESIGNED IN THE VOID.</p>
                </div>

            </div>

            {/* Subtle Decorative Elements */}
            <div className="absolute left-0 bottom-0 w-24 h-[1px] bg-gradient-to-r from-electric/50 to-transparent"></div>
            <div className="absolute right-0 bottom-0 w-24 h-[1px] bg-gradient-to-l from-electric/50 to-transparent"></div>

        </footer>
    );
};

export default Footer;
