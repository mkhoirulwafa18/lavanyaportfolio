"use client";

import { useRef, useEffect } from "react";
import ContactForm, { type ContactFormRef } from "./form/contact-form";
import { IconX } from "@tabler/icons-react";
import FloatingContactButton from "../components/ui/floating-contact-button";
import { gsap } from "gsap";
import { useContactModal } from "@/contexts/contact-modal-context";

export default function ContactModal() {
    const modalRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<ContactFormRef>(null);
    const { isModalOpen, toggleModal } = useContactModal();

    // Animate modal open/close
    useEffect(() => {
        if (isModalOpen) {
            gsap.to(backdropRef.current, {
                opacity: 1,
                duration: 0.8,
                pointerEvents: "auto",
                ease: "power2.out",
            });
            gsap.to(modalRef.current, {
                y: "0%",
                duration: 1,
                ease: "power4.inOut",
            });
        } else {
            gsap.to(backdropRef.current, {
                opacity: 0,
                duration: 0.8,
                pointerEvents: "none",
                ease: "power2.out",
            });
            gsap.to(modalRef.current, {
                y: "110%",
                duration: 1,
                ease: "power4.inOut",
            });
        }
    }, [isModalOpen]);

    // ESC key handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) toggleModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen, toggleModal]);

    return (
        <>
            {/* Backdrop */}
            <div
                ref={backdropRef}
                onClick={toggleModal}
                className="fixed top-0 left-0 inset-0 bg-stone-900/60 h-[100dvh] w-screen pointer-events-none opacity-0"
            ></div>

            {/* Modal */}
            <div
                ref={modalRef}
                className="fixed top-4 bottom-4 left-4 right-4 px-6 py-10 pb-24 lg:p-12 bg-stone-100 rounded-2xl lg:rounded-3xl z-[998] will-change-transform overflow-y-auto translate-y-[110%]"
            >
                {/* Close Button */}
                <button
                    onClick={toggleModal}
                    className="fixed top-10 right-6 lg:top-8 lg:right-8 2xl:top-12 2xl:right-12 w-10 lg:w-12 2xl:w-16 h-10 lg:h-12 2xl:h-16 rounded-full flex items-center justify-center bg-background z-[999] cursor-pointer hover:scale-110 transition-all duration-150 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]"
                >
                    <IconX
                        className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 text-[#BACDB0]"
                        stroke={3}
                    />
                </button>

                {/* Form */}
                <div className="h-full overflow-y-auto pb-20">
                    <ContactForm ref={formRef} />
                </div>
                {/* <FloatingContactButton
                    formRef={formRef as React.RefObject<ContactFormRef>}
                /> */}
            </div>
            <FloatingContactButton
                formRef={formRef as React.RefObject<ContactFormRef>}
            />
        </>
    );
}
