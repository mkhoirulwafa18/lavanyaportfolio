"use client";

import { IconMail, IconSend2 } from "@tabler/icons-react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { useRef, useState, useEffect } from "react";
import { useFooter } from "@/contexts/footer-context";
import { type ContactFormRef } from "@/components/form/contact-form";
import { gsap } from "gsap";
import { useContactModal } from "@/contexts/contact-modal-context";

interface FloatingContactButtonProps {
    formRef: React.RefObject<ContactFormRef>;
}

export default function FloatingContactButton({
    formRef,
}: FloatingContactButtonProps) {
    const { isModalOpen, toggleModal } = useContactModal();

    const { width } = useWindowSize();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { footerRef } = useFooter();
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const delay = isInitialLoad ? 3 : 0;
        gsap.fromTo(
            buttonRef.current,
            { y: 200, scale: 0.8 },
            {
                y: 0,
                scale: 1,
                duration: 1,
                delay,
                ease: "power4.out",
            }
        );
        const timer = setTimeout(() => setIsInitialLoad(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Slide away when footer is in view or modal open
    useEffect(() => {
        if (!buttonRef.current || !footerRef?.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isFooterVisible = entry.isIntersecting;
                gsap.to(buttonRef.current, {
                    y: isFooterVisible ? 200 : 0,
                    scale: isFooterVisible ? 0.8 : 1,
                    duration: 1,
                    ease: "power4.out",
                });
            },
            {
                threshold: 0.1 // Trigger when at least 10% of footer is visible
            }
        );

        observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, [footerRef]);

    const handleClick = () => {
        if (isModalOpen && formRef.current) {
            formRef.current.submit();
        } else {
            toggleModal();
        }
    };

    return (

        <button
            onClick={handleClick}
            ref={buttonRef}
            className={`${isModalOpen ? "bg-background" : "bg-[#BACDB0]"
                } flex items-center gap-2 xl:gap-3 fixed bottom-8 left-1/2 -translate-x-1/2 pl-1 py-1 pr-4 xl:pr-6 rounded-full shadow-2xl cursor-pointer group z-[1000] transition-colors duration-700 delay-100 ease-in-out`}
        >
            <div className="h-12 xl:h-16 w-12 xl:w-16 relative rounded-full">
                {/* Avatar */}
                <div
                    className={`${isModalOpen ? "opacity-0" : ""
                        } w-full h-full rounded-full overflow-hidden relative group-hover:opacity-0 group-hover:scale-70 transition-all duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]`}
                >
                    <Image
                        src="/avatar.webp"
                        alt="logo"
                        fill
                        className="w-full h-auto object-cover object-center"
                    />
                </div>

                {/* Mail Icon */}
                <span
                    className={`${isModalOpen ? "opacity-0" : ""
                        } flex items-center justify-center h-12 xl:h-16 w-12 xl:w-16 bg-stone-100 rounded-full scale-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-100 transition-all duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]`}
                >
                    <IconMail
                        className="text-background"
                        stroke={2.5}
                        size={width < 728 ? 20 : 30}
                    />
                </span>

                {/* Send Icon */}
                <span
                    className={`${isModalOpen ? "scale-100 opacity-100" : "scale-70 opacity-0"
                        } h-12 xl:h-16 w-12 xl:w-16 bg-stone-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-end transition-all duration-200 delay-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]`}
                >
                    <div className="flex transition-transform duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:translate-x-1/2">
                        <div className="flex items-center justify-center w-12 xl:w-16">
                            <IconSend2
                                className="text-background"
                                stroke={2.5}
                                size={width < 728 ? 20 : 30}
                            />
                        </div>
                        <div className="flex items-center justify-center w-12 xl:w-16">
                            <IconSend2
                                className="text-background"
                                stroke={2.5}
                                size={width < 728 ? 20 : 30}
                            />
                        </div>
                    </div>
                </span>
            </div>

            {/* Label */}
            <div
                className={`${isModalOpen ? "text-[#BACDB0]" : "text-background"
                    } overflow-hidden h-7 lg:h-9`}
            >
                <div className="flex flex-col transition-transform duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:-translate-y-1/2">
                    <span className="text-xl lg:text-3xl font-semibold">
                        {isModalOpen ? "Submit" : "Contact"}
                    </span>
                    <span className="text-xl lg:text-3xl font-semibold">
                        {isModalOpen ? "Submit" : "Contact"}
                    </span>
                </div>
            </div>
        </button>
    );
}
