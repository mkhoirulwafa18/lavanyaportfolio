"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/constants";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

/**
 * Services component that displays a list of services with scroll-triggered animations.
 * The component creates a stacked card effect where cards animate based on scroll position.
 * Animations are disabled on mobile devices.
 * 
 * @returns {JSX.Element} The rendered Services component
 */
export default function Services() {
    const { width } = useWindowSize();
    const isMobile = width < 768; // md breakpoint in Tailwind

    useGSAP(() => {
        // return if on mobile to disable animations
        if (isMobile) return;

        const cards = gsap.utils.toArray(".card");

        ScrollTrigger.create({
            trigger: cards[0] as Element,
            start: "top 30%",
            endTrigger: cards[cards.length - 1] as Element,
            end: "top 30%",
            pin: "#services-title",
            pinSpacing: false,
            // markers: true,
        });

        gsap.to("#services-title", {
            y: `-${(cards.length - 1) * 28}vh`,
            ease: "none",
            scrollTrigger: {
                trigger: cards[0] as Element,
                start: "top 30%",
                endTrigger: "#footer",
                end: "top 65%",
                scrub: true,
                // markers: true,
            },
        });

        cards.forEach((card, index) => {
            // const isLastCard = index === cards.length - 1;
            const cardInner = (card as Element).querySelector(".card-inner");

            ScrollTrigger.create({
                trigger: card as Element,
                start: "top 30%",
                endTrigger: cards[cards.length - 1] as Element,
                end: "bottom 60%",
                pin: true,
                pinSpacing: false,
                // markers: true,
            });

            gsap.to(cardInner, {
                y: `-${(cards.length - index) * 22}vh`,
                scale: 0.8 + index * 0.05,
                rotationZ: (Math.random() - 0.5) * 5, // Random rotationZ between -2.5 and 2.5 degrees
                rotationX: (Math.random() - 0.5) * 5, // Random rotationX between -2.5 and 2.5 degrees
                ease: "none",
                scrollTrigger: {
                    trigger: card as Element,
                    start: "top 30%",
                    endTrigger: cards[cards.length - 1] as Element,
                    end: "bottom 60%",
                    scrub: true,
                    // markers: true,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [isMobile]); // Add isMobile as a dependency to re-run when screen size changes

    return (
        <section className="px-4 py-8 overflow-hidden">
            <h2
                id="services-title"
                className="text-[clamp(24px,2vw,60px)] font-semibold mb-4 lg:mb-6 relative text-[#BACDB0]"
            >
                Services
            </h2>

            <div className="cards flex flex-col lg:gap-2 mb-16 lg:mb-56">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} bgColor={service.bgColor} index={index} />
                ))}
            </div>
        </section>
    );
}

/**
 * Props interface for the ServiceCard component
 * @interface ServiceCardProps
 * @property {string} title - The title of the service
 * @property {string} description - A detailed description of the service
 * @property {string[]} keywords - Array of keywords related to the service
 * @property {string} imageUrl - URL of the service image
 * @property {number} index - Index of the card in the services list
 * @property {string} [bgColor] - Optional background color for the card
 * @property {string} [textColor] - Optional text color for the card content
 */
type ServiceCardProps = {
    title: string;
    description: string;
    keywords: string[];
    imageUrl: string;
    index: number;
    bgColor?: string;
    textColor?: string;
};

/**
 * ServiceCard component that displays individual service information
 * Includes title, description, keywords, and an image
 * 
 * @param {ServiceCardProps} props - The props for the ServiceCard component
 * @returns {JSX.Element} The rendered ServiceCard component
 */
function ServiceCard({
    title,
    description,
    keywords,
    imageUrl,
    index,
    bgColor,
    textColor,
}: ServiceCardProps) {
    return (
        <div className="card relative pb-4" id={`card-${index}`}>
            <div
                className={cn("card-inner relative will-change-transform w-full h-full p-6 lg:p-8 rounded-xl lg:rounded-2xl")}
                style={{ backgroundColor: bgColor, color: textColor }}
            >
                <div className="flex flex-row justify-between mb-8 lg:mb-12">
                    <h3 className="text-[clamp(48px,7vw,144px)] font-semibold tracking-tight leading-none">
                        {title}
                    </h3>

                    <p className="text-lg lg:text-[clamp(48px,7vw,144px)] mt-2 lg:mt-0 font-semibold tracking-wider lg:tracking-normal leading-none">
                        (0{index + 1})
                    </p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-6/12">
                        <p className="text-[clamp(18px,2vw,40px)] font-semibold leading-tight">
                            {description}
                        </p>

                        <ul className="flex flex-wrap gap-2 2xl:gap-3 w-full lg:w-10/12">
                            {keywords.map((keyword, index) => (
                                <li
                                    key={index}
                                    className="text-[clamp(14px,1.2vw,24px)] px-4 py-1.5 rounded-full bg-stone-50/70 font-semibold"
                                >
                                    {keyword}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full lg:w-5/12 h-[250px] lg:h-[clamp(350px,25vw,600px)] rounded-lg lg:rounded-2xl overflow-hidden mb-4 lg:mb-0">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover object-center pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
