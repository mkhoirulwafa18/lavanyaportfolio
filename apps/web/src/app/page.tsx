"use client";
import SeamlessGallery from '@/components/seamless-gallery';
import { hoverBtn } from '@/lib/utils/btn-hover';
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image'
import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import GalleryMarquee from '@/components/gallery-marquee';
// images
import shape_1 from '../../public/gallery/shape-1.svg';
import shape_2 from '../../public/gallery/shape-2.svg';
import g_1 from '../../public/gallery/gal-1.jpg';
import g_2 from '../../public/gallery/gal-2.jpg';
import g_3 from '../../public/gallery/gal-3.jpg';
import g_4 from '../../public/gallery/gal-4.jpg';
import g_5 from '../../public/gallery/gal-5.jpg';
import { funFactList } from '@/lib/constants';
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
import FunFactSection from '@/components/funfact-section';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';


const gallery_images = [
	g_1, g_2, g_3, g_4, g_5, g_3, g_1, g_2, g_3, g_4, g_5, g_3
]

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Home() {
	useScrollSmooth();
	useEffect(() => {
		document.body.classList.add("tp-smooth-scroll");
		return () => {
			document.body.classList.remove("tp-smooth-scroll");
		};
	}, []);

	return (
		<div id="smooth-wrapper" className='bg-background'>
			<div id="smooth-content">
				<div className="grid gap-6">
					{/* Hero */}
					<Hero />
					{/* End of Hero */}
					{/* About */}
					<section className="w-full py-2 text-[#BACDB0] px-3">
						<h2 className="mb-2 font-light text-lg">(About Lavanya)</h2>
						<p className="text-2xl font-medium leading-tight ">
							I'm a visual brand storyteller with a passion for creating compelling visual narratives.
							My journey in the world of design has taken me to various roles, from brand strategist to visual designer.
							I thrive on turning complex ideas into visually stunning and impactful designs that resonate with audiences.
						</p>
					</section>
					{/* End of About */}
					{/* FunFact */}
					<FunFactSection />
					{/* End of FunFact */}
					{/* Services */}
					<Services />
					{/* End of Services */}
					{/* Contact */}
					<section className="rounded-lg border p-4">
						<h2 className="mb-2 font-medium">Contact</h2>
					</section>
					{/* End of Contact */}
				</div>
			</div>
		</div>
	);
}
