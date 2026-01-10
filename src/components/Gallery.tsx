import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/gallery/gallery-1.png';
import img2 from '../assets/gallery/gallery-2.png';
import img3 from '../assets/gallery/gallery-3.png';
import img4 from '../assets/gallery/gallery-4.png';
import img5 from '../assets/gallery/gallery-5.png';
import img6 from '../assets/gallery/gallery-6.png';

gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: img1, title: "THE AWAKENING", id: "01" },
    { src: img2, title: "DIVINE WRATH", id: "02" },
    { src: img3, title: "ETERNAL FORM", id: "03" },
    { src: img4, title: "THE ASCENT", id: "04" },
    { src: img5, title: "SILENT THUNDER", id: "05" },
    { src: img6, title: "ABSOLUTE POWER", id: "06" },
];

const Gallery = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // Staggered Fade Up for all items
            const items = gsap.utils.toArray('.gallery-item');

            items.forEach((item: any) => {
                gsap.fromTo(item,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Parallax Effect for even/odd columns if needed (optional polish)
            // For now, clean fade-ins are "different" and "classy" compared to the forced horizontal scroll.

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="gallery" className="relative bg-void min-h-screen py-32">

            {/* Header */}
            <div className="container mx-auto px-8 md:px-16 lg:px-24 mb-24">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-electric text-xs tracking-[0.4em]">ARCHIVE</span>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-electric to-transparent"></div>
                </div>
                <h2 className="font-display text-5xl md:text-6xl text-white">THE COLLECTION</h2>
            </div>

            {/* Vertical Staggered Grid */}
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            // Add extra margin to the 2nd (index 1, 4, etc) or center columns to create a "Masonry" offset look
                            className={`gallery-item group relative aspect-[3/4] w-full bg-stone-900 border border-white/10 overflow-hidden cursor-pointer ${index % 3 === 1 ? 'lg:mt-16' : ''}`}
                        >

                            {/* Image - Portrait fit with top alignment */}
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover object-top grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>

                            {/* Minimal Overlay Info */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-8 backdrop-blur-[2px]">
                                <span className="text-electric text-[10px] tracking-[0.3em] mb-4 uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.id}</span>
                                <h3 className="font-display text-3xl text-white tracking-widest translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.title}</h3>
                                <div className="w-12 h-[1px] bg-white/50 mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-full h-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="w-full h-full border border-white/20"></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>



        </section>
    );
};

export default Gallery;
