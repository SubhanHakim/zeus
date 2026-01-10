import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from '../assets/zeus-about.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Image Parallax & Scale Effect
            gsap.fromTo(imageRef.current,
                { scale: 1.2, y: -50 },
                {
                    scale: 1,
                    y: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // Text Reveal Animation
            const splitTextLines = gsap.utils.toArray('.reveal-text');
            splitTextLines.forEach((line: any) => {
                gsap.fromTo(line,
                    { y: 100, opacity: 0, rotateX: 20 },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="philosophy" className="relative w-full bg-void text-stone-200 py-32 overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light">
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual Side - Sticky/Parallax Wrapper */}
                <div className="relative h-[50vh] lg:h-auto lg:min-h-[60vh] w-full overflow-hidden rounded-sm border border-white/5 order-2 lg:order-1 aspect-[4/5]">
                    {/* Removed darkening overlay for clarity */}
                    <img
                        ref={imageRef}
                        src={aboutImg}
                        alt="Zeus Portrait"
                        className="w-full h-full object-cover object-top"
                    />

                    {/* Floating Caption/Data */}
                    <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                        <span className="text-[10px] tracking-[0.3em] text-white/60">FIGURE 02</span>
                        <div className="w-12 h-[1px] bg-white/40"></div>
                        <span className="text-xs font-display tracking-widest text-white mt-1">THE ORIGIN</span>
                    </div>
                </div>

                {/* Content Side */}
                <div ref={textRef} className="flex flex-col gap-12 order-1 lg:order-2 relative z-10">

                    {/* Section Header */}
                    <div className="flex flex-col gap-4">
                        <div className="reveal-text flex items-center gap-4">
                            <span className="text-electric text-xs tracking-[0.4em]">PHILOSOPHY</span>
                            <div className="h-[1px] w-24 bg-gradient-to-r from-electric to-transparent"></div>
                        </div>
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white">
                            <div className="overflow-hidden"><span className="reveal-text block">ORDER</span></div>
                            <div className="overflow-hidden"><span className="reveal-text block text-stone-500">FROM</span></div>
                            <div className="overflow-hidden"><span className="reveal-text block">CHAOS</span></div>
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-8 max-w-lg">
                        <p className="reveal-text font-body text-lg md:text-xl font-light text-stone-300 leading-relaxed">
                            Before the silence, there was noise. Before the form, there was the void.
                            The Ascendant Series is not merely sculpture; it is the crystallization of divine will.
                        </p>
                        <p className="reveal-text font-body text-base text-stone-400 font-light leading-relaxed">
                            We reinterpret the classical through the lens of the absolute. No excess. No decoration.
                            Only the raw, structural integrity of power frozen in time.
                        </p>
                    </div>

                    {/* Interactive Button */}
                    <div className="reveal-text pt-4">
                        <button className="group flex items-center gap-4 text-xs tracking-[0.25em] text-white uppercase hover:text-electric transition-colors duration-300">
                            <span className="w-8 h-[1px] bg-white group-hover:w-16 group-hover:bg-electric transition-all duration-300"></span>
                            Read The Manifesto
                        </button>
                    </div>

                </div>

            </div>

            {/* Ornamental Vertical Line */}
            <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/5 hidden xl:block"></div>

        </section>
    );
};

export default About;
