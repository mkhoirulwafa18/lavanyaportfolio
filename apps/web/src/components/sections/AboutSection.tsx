"use client";

import TextReveal from "@/components/ui/text-reveal";

export default function AboutSection() {
    return (
        <section className="w-full py-2 lg:py-8 text-[#BACDB0] px-3">
            <TextReveal>
                <h2 className="mb-2 font-light text-[clamp(16px,1.2vw,28px)]">(About Lavanya)</h2>
            </TextReveal>
            <TextReveal>
                <p className="text-[clamp(24px,4vw,96px)] font-medium leading-[1.1] -tracking-wider">
                    I build the web, one pixel-perfect interaction at a time. As a frontend engineer, I fuse technical precision with creative vision to develop dynamic, award-worthy websites. I specialize in transforming complex ideas into beautiful, intuitive, and powerfully engaging digital experiences that users love to navigate.
                </p>
            </TextReveal>
        </section>
    );
}