"use client";

import { useContactModal } from "@/contexts/contact-modal-context";
import Link from "next/link";

export default function FooterCTAMobile() {
    const { toggleModal } = useContactModal();
    return (
        <div className="flex flex-col items-center gap-2 w-full absolute left-1/2 -translate-x-1/2 top-[65%] -translate-y-[65%] lg:hidden">
            <a
                href="mailto:lavanyayasmeen@gmail.com"
                className="flex flex-col items-start pt-6 pb-4 px-4 rounded-lg w-full max-w-[600px] bg-[#BACDB0] cursor-pointer"
            >
                <p className="text-background tracking-tight">Email me</p>
                <p className="text-xl text-stone-100 leading-tight font-semibold">
                    lavanyayasmeen@gmail.com
                </p>
            </a>
            <button
                onClick={toggleModal}
                className="p-4 rounded-full w-full max-w-[600px] bg-[#BACDB0] cursor-pointer"
            >
                <p className="text-2xl tracking-tight font-semibold text-background">
                    Send me a message
                </p>
            </button>
        </div>
    );
}