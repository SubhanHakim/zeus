import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import truthImg from '../assets/supportes/truth.webp';
import geniusImg from '../assets/supportes/genius.webp';
import andyImg from '../assets/supportes/andy.webp';
import gnonImg from '../assets/supportes/gnon.webp';
import lowkeyImg from '../assets/supportes/image.webp';

gsap.registerPlugin(ScrollTrigger);

const supporters = [
    {
        id: 1,
        name: 'j⧉nus',
        handle: '@j⧉nus',
        image: geniusImg,
        link: 'https://x.com/repligate'
    },
    {
        id: 2,
        name: 'Andy Ayrey',
        handle: '@AndyAyrey',
        image: andyImg,
        link: 'https://x.com/andyayrey'
    },
    {
        id: 3,
        name: 'Gnon',
        handle: '@Gnon',
        image: gnonImg,
        link: 'https://x.com/GnonLabs'
    },
    {
        id: 4,
        name: 'Lowkey',
        handle: '@Kimchi662',
        image: lowkeyImg,
        link: 'https://x.com/Truth'
    },
];

const Support = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".support-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="monument" className="relative w-full bg-void py-32 px-8 md:px-16 lg:px-24 border-t border-white/5">

            {/* Header */}
            <div className="mb-20 flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-gradient-to-l from-electric to-transparent"></div>
                    <span className="text-electric text-xs tracking-[0.4em] uppercase">The Pillars</span>
                    <div className="h-[1px] w-12 bg-gradient-to-r from-electric to-transparent"></div>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-widest">
                    SUPPORTERS
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {supporters.map((sup) => (
                    <a
                        key={sup.id}
                        href={sup.link}
                        target="_blank"
                        rel="noreferrer"
                        className="support-card group relative p-[1px] rounded-sm overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-electric/50 hover:to-electric/10 transition-all duration-500"
                    >
                        {/* Inner Card */}
                        <div className="relative h-full bg-stone-900/80 backdrop-blur-sm p-6 flex items-center gap-6 group-hover:bg-stone-900/60 transition-colors duration-500">

                            {/* Avatar */}
                            <div className="relative w-16 h-16 shrink-0 rounded-full border border-white/20 p-1 overflow-hidden group-hover:border-electric transition-colors duration-500">
                                <img
                                    src={sup.image}
                                    alt={sup.name}
                                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col min-w-0">
                                <h3 className="text-white font-display text-lg tracking-wider truncate group-hover:text-electric transition-colors duration-300">
                                    {sup.name}
                                </h3>
                                <p className="text-stone-500 text-xs tracking-widest uppercase mt-1 group-hover:text-stone-300 transition-colors">
                                    {sup.handle}
                                </p>
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-electric">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </section>
    );
};

export default Support;
