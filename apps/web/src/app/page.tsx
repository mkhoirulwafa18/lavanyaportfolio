"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import FunFactSection from '@/components/sections/funfact-section';
import Hero from '@/components/sections/HeroSection';
import Services from '@/components/sections/ServicesSection';
import Footer from "@/components/sections/FooterSection";
import AboutSection from "@/components/sections/AboutSection";

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
					<Hero />
					<AboutSection />
					<FunFactSection />
					<Services />
					<Footer />
				</div>
			</div>
		</div>
	);
}
