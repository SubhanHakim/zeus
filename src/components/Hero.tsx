import { useEffect, useRef } from 'react';
import zeusImg from '../assets/zeus-hero.png';
import dexIcon from '../assets/dexscreener.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subTextRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    useEffect(() => {
        const tl = gsap.timeline();

        // Reveal Text Stagger
        tl.fromTo(textRef.current?.children || [],
            { y: 100, opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
            {
                y: 0,
                opacity: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 0.5
            }
        )
            // Subtext and line reveal
            .fromTo(subTextRef.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
                "-=1"
            )
            // Image subtle scale entrance
            .fromTo(imageRef.current,
                { scale: 1.1, filter: 'blur(10px)', opacity: 0 },
                { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 2, ease: 'power2.out' },
                "-=2"
            );

    }, []);

    return (
        <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-void">

            {/* Cinematic Background Grain/Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 md:px-16 lg:px-24 h-full relative z-10 grid grid-cols-1 md:grid-cols-12 content-center items-center md:pb-20">

                {/* Typography Area - Mobile: Top / Desktop: Left */}
                <div className="md:col-span-8 flex flex-col justify-center relative z-20 mix-blend-difference text-stone-200 mt-0 md:mt-24">

                    {/* Architectural Eyebrow Text */}
                    <div ref={subTextRef} className="flex items-center gap-4 mb-4 md:mb-6 opacity-0">
                        <div className="w-8 md:w-12 h-[1px] bg-electric"></div>
                        <span className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-stone-400">The Ascendant Series</span>
                    </div>

                    {/* Masked Title Animation */}
                    <h1 ref={textRef} className="font-display font-bold text-[13vw] md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.9] tracking-tighter text-white/90 overflow-hidden flex flex-col">
                        <span className="inline-block origin-bottom-left">GOD</span>
                        <span className="inline-block origin-bottom-left text-stone-500">OF</span>
                        <span className="inline-block origin-bottom-left text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-500">THUNDER</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="mt-6 md:mt-10 max-w-sm md:max-w-md relative"
                    >
                        {/* Added background blur/gradient to ensure readability if overlap happens */}
                        <div className="absolute inset-0 -z-10 bg-void/50 blur-xl"></div>
                        <p className="font-body text-stone-400 font-light text-sm md:text-lg leading-relaxed border-l border-white/10 pl-6">
                            Divine order restored through silence.
                            <br />Structure over chaos.
                            <br />Light over noise.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-8 mt-8 items-center pl-6 pointer-events-auto">
                            <a href="https://x.com/zeus_ascendant?s=11&t=RhEbVKiipjrmWTbsvZD5ZA" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-electric/50 transition-colors duration-300">
                                    <svg className="w-3 h-3 text-stone-400 group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </div>
                                <span className="text-xs tracking-[0.2em] text-stone-500 group-hover:text-white transition-colors uppercase">X (Twitter)</span>
                            </a>

                            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-electric/50 transition-colors duration-300">
                                    {/* Force white icon using filter */}
                                    <img src={dexIcon} alt="PumpFun" className="w-3 h-3 object-contain opacity-50 group-hover:opacity-100 filter brightness-0 invert transition-all" />
                                </div>
                                <span className="text-xs tracking-[0.2em] text-stone-500 group-hover:text-white transition-colors uppercase">PumpFun</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Monumental Figure */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute bottom-0 md:top-0 right-0 w-full md:w-[50vw] h-[60vh] md:h-full z-0 flex items-end justify-center md:items-end md:justify-end pointer-events-none"
                >
                    <img
                        ref={imageRef}
                        src={zeusImg}
                        alt="Zeus Monument"
                        className="w-full h-[95%] lg:h-[105%] object-cover object-bottom md:object-contain opacity-0 mix-blend-lighten drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-void via-void/40 to-transparent"></div>
                    <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-void to-transparent"></div>
                </motion.div>

                {/* Energy Element */}
                <motion.div
                    style={{ y: y2 }}
                    className="absolute top-1/4 right-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-electric/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen"
                />

            </div>

            {/* Bottom Indicator - Safe spacing */}
            <div className="absolute bottom-0 left-0 w-full px-8 md:px-24 pb-6 md:pb-8 flex justify-between items-end mix-blend-plus-lighter z-30 pointer-events-none">
                <span className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">Scroll to Witness</span>
                <div className="hidden md:flex flex-col items-end gap-2">
                    <span className="text-[10px] tracking-[0.3em] text-stone-500">01 / 03</span>
                    <div className="w-24 h-[1px] bg-white/20">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, delay: 1, ease: "circOut" }}
                            className="h-full bg-white"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
