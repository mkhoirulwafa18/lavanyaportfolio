"use client";

import React from "react";
import Image, { type ImageProps } from "next/image";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

/**
 * Reusable gallery marquee component.
 *
 * - Tailwind-first styling
 * - Optional light/dark shape overlays (positioned absolutely)
 * - Fully controlled marquee speed, direction, and gaps
 */
export type GalleryMarqueeProps = {
    /** Array of image sources (Next.js Image StaticImageData or string urls). */
    images: Array<ImageProps["src"]>;
    /** Marquee speed in px/sec. Default: 100 */
    speed?: number;
    /** Scroll direction. Default: "left" */
    direction?: "left" | "right";
    /** Gap in pixels between items. Default: 30 */
    gapPx?: number;
    /** Additional Tailwind classes for the outer container. */
    containerClassName?: string;

    /** Optional decorative shapes (light/dark variants) for top-left. */
    shape1Light?: ImageProps["src"];
    shape1Dark?: ImageProps["src"];
    /** Optional decorative shapes (light/dark variants) for top-right. */
    shape2Light?: ImageProps["src"];
    shape2Dark?: ImageProps["src"];

    /** Tailwind classes to position shape 1 container. Default: absolute top-0 left-0 */
    shape1ClassName?: string;
    /** Tailwind classes to position shape 2 container. Default: absolute top-0 right-0 */
    shape2ClassName?: string;

    /** Additional props passed to each <Image/> item (e.g., sizes, priority). */
    imgProps?: Partial<Omit<ImageProps, "src" | "alt">>;
};

const GalleryMarquee: React.FC<GalleryMarqueeProps & { ref: React.Ref<HTMLDivElement> }> = ({
    ref,
    images,
    speed = 100,
    direction = "left",
    gapPx = 30,
    containerClassName = "",
    shape1Light,
    shape1Dark,
    shape2Light,
    shape2Dark,
    shape1ClassName = "",
    shape2ClassName = "",
    imgProps,
}) => {
    return (
        <div ref={ref} className={`relative w-svw max-w-svw lg:gallery-marquee-fade ${containerClassName}`}>
            {(shape1Light || shape1Dark) && (
                <div className={cn("absolute inset-x-0 top-0 z-10 pointer-events-none w-svw", shape1ClassName)}>
                    {shape1Light && (
                        <Image
                            src={shape1Light}
                            alt="shape-1-light"
                            className="block dark:hidden w-full h-auto"
                            decoding="async"
                            loading="lazy"
                            draggable={false}
                        // aria-hidden="true"
                        />
                    )}
                    {shape1Dark && (
                        <Image
                            src={shape1Dark}
                            alt="shape-1-dark"
                            className="hidden dark:block w-full h-auto"
                            decoding="async"
                            loading="lazy"
                            draggable={false}
                        // aria-hidden="true"
                        />
                    )}
                </div>
            )}

            {/* Shape group 2 (top-right) */}
            {(shape2Light || shape2Dark) && (
                <div className={cn("absolute inset-x-0 bottom-0 z-10 pointer-events-none w-svw", shape2ClassName)}>
                    {shape2Light && (
                        <Image
                            src={shape2Light}
                            alt="shape-2-light"
                            className="block dark:hidden w-full h-auto"
                            sizes="100vw"
                            decoding="async"
                            loading="lazy"
                            draggable={false}
                            aria-hidden="true"
                        />
                    )}
                    {shape2Dark && (
                        <Image
                            src={shape2Dark}
                            alt="shape-2-dark"
                            className="hidden dark:block w-full h-auto"
                            sizes="100vw"
                            decoding="async"
                            loading="lazy"
                            draggable={false}
                            aria-hidden="true"
                        />
                    )}
                </div>
            )}

            {/* Content container */}
            <div className="w-full py-0.5 md:py-1">
                <div className="w-full">
                    {/* Marquee content */}
                    <Marquee
                        className="w-[90vw] gallery-timing"

                        speed={speed}
                        direction={direction}
                        gradient={false}
                    >
                        {images.map((src, i) => (
                            <div key={i} style={{ marginRight: gapPx }} className="shrink-0">
                                <Image
                                    src={src}
                                    alt={`gallery-img-${i}`}
                                    style={{ height: "auto" }}
                                    className="w-[45vw] md:w-[20vw] h-auto"
                                    {...imgProps}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default GalleryMarquee;