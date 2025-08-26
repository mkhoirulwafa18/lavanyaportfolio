"use client";

import { useRef, useEffect } from "react";
import { socialLinks } from "@/lib/constants";

export default function DesktopSocials() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Initialize refs array based on socialLinks length
    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, socialLinks.length);
    }, []);

    // Handle mouse events
    const handleMouseEnter = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            // Only set the src when user hovers
            if (!video.src) {
                video.src = socialLinks[index].videoUrl;
            }
            video.play().catch((err) => console.log("Video play error:", err));
        }
    };

    const handleMouseLeave = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            // Small delay to match the CSS transition
            setTimeout(() => {
                video.pause();
                video.currentTime = 0;
            }, 300);
        }
    };

    return (
        <ul className="hidden md:flex md:justify-between w-full">
            <li>
                <p className="font-semibold text-[clamp(16px,1.6vw,24px)] text-background py-2">
                    ©2025
                </p>
            </li>

            {socialLinks.map((social, index) => (
                <li key={social.title}>
                    <a
                        href={social.url}
                        className="relative group inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        aria-label={`Visit ${social.title}`}
                    >
                        {/* Video preview */}
                        <div
                            className={`${index === socialLinks.length - 1
                                ? "right-0"
                                : " left-1/2 -translate-x-1/2"
                                } absolute -top-48 w-[300px] h-[180px] p-2 rounded-lg bg-[#F0CCDF]/25 backdrop-blur-md opacity-0 translate-y-4 scale-95 pointer-events-none group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-10`}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[index] = el;
                                }}
                                data-src={social.videoUrl}
                                muted
                                loop
                                preload="none"
                                aria-hidden="true"
                                className="w-full h-full object-cover rounded"
                            ></video>
                        </div>

                        {/* Hover bridge - maintains hover state when moving cursor between text and video */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2 w-20 h-48 -top-48 opacity-0 pointer-events-none group-hover:pointer-events-auto z-5"
                            aria-hidden="true"
                        ></div>

                        <div
                            className={`${index === socialLinks.length - 1 ? "pl-6" : "px-6"
                                }  overflow-hidden h-10 py-2 `}
                        >
                            <div className="flex flex-col transition-transform duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:-translate-y-1/2">
                                <span className="font-semibold text-[clamp(16px,1.6vw,24px)] text-background mb-1.5">
                                    {social.title}
                                </span>
                                <span className="font-semibold text-[clamp(16px,1.6vw,24px)] text-background mb-1.5">
                                    {social.title}
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
}
