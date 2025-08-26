"use client";

import TextReveal from "@/components/text-reveal";

export default function AboutSection() {
    return (
        <section className="w-full py-2 text-[#BACDB0] px-3">
            <TextReveal>
                <h2 className="mb-2 font-light text-[clamp(16px,1.2vw,28px)]">(About Lavanya)</h2>
            </TextReveal>
            <TextReveal>
                <p className="text-[clamp(24px,4vw,96px)] font-medium leading-tight ">
                    I'm a visual brand storyteller with a passion for creating compelling visual narratives.
                    My journey in the world of design has taken me to various roles, from brand strategist to visual designer.
                    I thrive on turning complex ideas into visually stunning and impactful designs that resonate with audiences.
                </p>
            </TextReveal>
        </section>
    );
}