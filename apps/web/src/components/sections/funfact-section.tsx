"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { funFactList } from "@/lib/constants";

export default function FunFactSection() {
    const [ffIndex, setFfIndex] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    // store current number for increment/decrement
    const currentNumberRef = useRef<number>(funFactList[0]?.number ?? 0);

    // Autoplay loop
    useEffect(() => {
        const interval = setInterval(() => {
            setFfIndex((prev) => (prev + 1) % funFactList.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Animate content & counter
    useEffect(() => {
        const fact = funFactList[ffIndex];
        const fromVal = currentNumberRef.current;
        const toVal = fact.number;
        const counterObj = { val: fromVal };

        const ctx = gsap.context(() => {
            // animate text + image fade in
            gsap.fromTo(
                [imageRef.current, textRef.current],
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );

            // animate counter increment or decrement smoothly
            gsap.fromTo(
                counterObj,
                { val: fromVal },
                {
                    val: toVal,
                    duration: 1,
                    ease: "power1.out",
                    onUpdate: () => {
                        if (counterRef.current) {
                            counterRef.current.textContent = Math.floor(counterObj.val).toString();
                        }
                    },
                }
            );


            // update stored number
            currentNumberRef.current = toVal;
        });

        return () => ctx.revert();
    }, [ffIndex]);

    const fact = funFactList[ffIndex];

    return (
        <section className="w-full py-6 text-[#BACDB0] px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

                {/* Image box (container intact, only content animates) */}
                <div className="relative w-full aspect-square md:aspect-6/5 overflow-hidden rounded-lg border border-white/10 bg-[#BACDB0] p-3 md:p-4">
                    <div ref={imageRef} className="absolute inset-3">
                        <Image
                            key={fact.image}
                            src={fact.image}
                            alt={`fun-fact-${ffIndex}`}
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>

                <div className="relative w-full aspect-square md:aspect-6/5 overflow-hidden rounded-lg border border-white/10 bg-[#BACDB0] p-8 md:p-12 text-background flex flex-col justify-between gap-4">
                    <p ref={textRef} className="text-xl md:text-2xl lg:text-4xl leading-snug font-bold">
                        {fact.description}
                    </p>
                    <div className="text-9xl lg:text-[250px] font-extrabold leading-none">
                        <span ref={counterRef}>{fact.number}</span>+
                    </div>
                </div>

            </div>
        </section>
    );
}
