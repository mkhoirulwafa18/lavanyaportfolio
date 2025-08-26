"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useWindowSize from "@/hooks/useWindowSize";
import useInstagramBrowser from "@/hooks/useInstagramBrowser";
import GalleryMarquee from '@/components/gallery-marquee';
// images
import shape_1 from '../../../public/gallery/shape-1.svg';
import shape_2 from '../../../public/gallery/shape-2.svg';
import g_1 from '../../../public/gallery/gal-1.jpg';
import g_2 from '../../../public/gallery/gal-2.jpg';
import g_3 from '../../../public/gallery/gal-3.jpg';
import g_4 from '../../../public/gallery/gal-4.jpg';
import g_5 from '../../../public/gallery/gal-5.jpg';


const gallery_images = [
    g_1, g_2, g_3, g_4, g_5, g_3, g_1, g_2, g_3, g_4, g_5, g_3
];

export default function Hero() {
    const { width } = useWindowSize();
    const initialScale = width < 768 ? 0.4 : 0.25;
    const isInstagram = useInstagramBrowser();

    // refs
    const containerRef = useRef<HTMLDivElement>(null);
    const lavanyaRef = useRef<HTMLDivElement>(null);
    const yasmeenRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);
    const subHeadlineRef = useRef<HTMLDivElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // container zoom + reposition
            tl.fromTo(
                containerRef.current,
                { scale: initialScale, },
                {
                    scale: 1,
                    // top: 0,
                    // yPercent: 0,
                    duration: 1.5,
                    ease: "power3.out",
                }, 1.25
            );

            tl.fromTo(
                containerRef.current,
                { top: "50%", yPercent: -50 },
                {
                    top: 0, yPercent: 0,
                    ease: "power2.out"
                }, 2.75
            )

            // Lavanya text
            tl.fromTo(
                lavanyaRef.current,
                { y: 200 },
                { y: 0, duration: 1, ease: "power3.out" },
                0.2
            );

            // Yasmeen text
            tl.fromTo(
                yasmeenRef.current,
                { y: 200 },
                { y: 0, duration: 1, ease: "power3.out" },
                width < 768 ? 0.225 : 0.2
            );

            // Headline
            tl.fromTo(
                headlineRef.current,
                { y: 120 },
                { y: 0, duration: 1.5, ease: "power3.out" },
                width < 768 ? 2 : 1.9
            );

            // Gallery
            tl.fromTo(
                galleryRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                3
            );
            // Star
            tl.fromTo(
                starRef.current,
                { y: 120 },
                { y: 0, duration: 1.5, ease: "power3.out" },
                width < 768 ? 3.05 : 2.85
            );

            // SubHeadline
            tl.fromTo(
                subHeadlineRef.current,
                { y: 120 },
                { y: 0, duration: 1.5, ease: "power3.out" },
                width < 768 ? 3.05 : 2.85
            );
        });

        return () => ctx.revert();
    }, [width]);

    return (
        <section className="pt-4 lg:pb-24 h-screen relative flex">
            <div className="">
                <h1 className="sr-only hidden">Lavanya Yasmeen</h1>

                <div
                    ref={containerRef}
                    className="absolute flex flex-col items-center justify-center sm:flex-row sm:gap-8 sm:justify-between left-4 right-4 mt-2 origin-center will-change-transform"
                >
                    {/* Lavanya */}
                    <div className="overflow-hidden -mb-3 sm:mb-0">
                        <div ref={lavanyaRef} className="w-full pointer-events-none mb-6">
                            <Image
                                src="/LAVANYA.svg"
                                alt="Hero"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto sm:w-auto sm:h-[10vw]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Yasmeen */}
                    <div className="overflow-hidden">
                        <div ref={yasmeenRef} className="w-full pointer-events-none mb-6">
                            <Image
                                src="/YASMEEN.svg"
                                alt="Hero"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-[18.3vw] sm:h-[10vw]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mt-[24vh] xs:mt-[27vh] sm:mt-[15vh] md:mt-[18vw]">
                    <GalleryMarquee
                        ref={galleryRef}
                        images={gallery_images}
                        speed={80}
                        direction="left"
                        gapPx={30}
                        shape1Light={shape_1}
                        shape2Light={shape_2}
                        imgProps={{ priority: true }}
                    />
                </div>
                {/* End of Gallery */}

                {/* Bottom Headline */}
                <div
                    className={`overflow-hidden absolute left-4 right-4 xs:top-[80vh] sm:top-[70vh] md:top-[12.5vw] ${isInstagram ? "bottom-[17vh]" : "top-[80vh]"
                        }`}
                >
                    <div className="flex flex-col gap-0.5 md:gap-0 md:flex-row justify-between items-center relative text-[#BACDB0]">
                        <div className="overflow-hidden">
                            <p
                                ref={headlineRef}
                                className="text-[clamp(20px,1.6vw,32px)] font-bold py-1 leading-[1.2] text-center md:text-left"
                            >
                                Visual Brand Storyteller
                            </p>
                        </div>

                        {/* Star */}
                        <div className="hidden md:block overflow-hidden ">
                            <div
                                ref={starRef}
                                className="w-[clamp(28px,2vw,48px)] h-[clamp(28px,2vw,48px)] relative group"
                            >
                                <Image
                                    src="/star.svg"
                                    alt="star"
                                    fill
                                    sizes="(max-width: 768px) 28px, 48px"
                                    className="group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <p
                                ref={subHeadlineRef}
                                className={`text-[clamp(20px,1.6vw,32px)] font-light leading-tight -tracking-tight -mt-1 text-center md:text-left`}
                            >
                                Translating ideas into captivating visuals that resonate and inspire.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
