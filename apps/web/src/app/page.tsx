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
import { useEffect } from 'react';
import GalleryMarquee from '@/components/gallery-marquee';
// images
import shape_1 from '../../public/gallery/shape-1.svg';
import shape_2 from '../../public/gallery/shape-2.svg';
import g_1 from '../../public/gallery/gal-1.jpg';
import g_2 from '../../public/gallery/gal-2.jpg';
import g_3 from '../../public/gallery/gal-3.jpg';
import g_4 from '../../public/gallery/gal-4.jpg';
import g_5 from '../../public/gallery/gal-5.jpg';


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

	// useGSAP(() => {
	// 	const timer = setTimeout(() => {
	// 		// hero animation
	// 		//   heroTitleAnim();
	// 		//   heroBgAnimation();
	// 		//   // bounce animation
	// 		//   bounceAnimation();
	// 		//   // video anim
	// 		//   videoAnimTwo();
	// 		//   // panel animation
	// 		//   panelOneAnimation();
	// 		//   // award animation
	// 		//   awardAnimOne();
	// 		//   // instagram animation
	// 		//   instagramAnim();
	// 		hoverBtn();
	// 	}, 100)
	// 	return () => clearTimeout(timer);
	// });
	return (
		<div id="smooth-wrapper" className='bg-background'>
			<div id="smooth-content">
				<div className="grid gap-6">
					{/* Hero */}
					<section className="w-full min-h-screen py-2 flex flex-col justify-between">
						<h1 className="absolute sr-only">Lavanya Yasmeen</h1>
						{/* Title */}
						<div className="flex flex-col max-w-svw md:flex-row gap-4 md:gap-8 w-full mb-8 px-1 md:px-4">
							<Image
								src="/LAVANYA.svg"
								alt="Hero illustration 1"
								width={800}
								height={600}
								className="w-full md:w-[49vw] h-auto"
								priority
							/>
							<Image
								src="/YASMEEN.svg"
								alt="Hero illustration 2"
								width={800}
								height={600}
								className="w-full md:w-[50vw] h-auto"
								priority
							/>
						</div>
						{/* End of Title */}
						{/* Gallery */}
						<GalleryMarquee
							images={gallery_images}
							speed={90}
							direction="left"
							gapPx={30}
							shape1Light={shape_1}
							shape2Light={shape_2}
							imgProps={{ priority: true }}
						/>
						{/* End of Gallery */}
						{/* Headline */}
						<div className="flex flex-col items-center justify-center max-w-full text-[#BACDB0] text-center py-8">
							<h2 className="text-2xl font-bold py-1">
								Visual Brand Storyteller
							</h2>
							<p className="text-lg font-light leading-4 -tracking-tight">
								Translating ideas into captivating visuals that resonate and inspire.
							</p>
						</div>
					</section>
					{/* End of Hero */}
					{/* About */}
					<section className="w-full py-2 flex flex-col text-[#BACDB0] px-3">
						<h2 className="mb-2 font-light text-xl">(About Lavanya)</h2>
						<p className="text-2xl font-medium leading-tight ">
							I'm a visual brand storyteller with a passion for creating compelling visual narratives.
							My journey in the world of design has taken me to various roles, from brand strategist to visual designer.
							I thrive on turning complex ideas into visually stunning and impactful designs that resonate with audiences.
						</p>
					</section>
					{/* End of About */}
					{/* FunFact */}
					<section className="min-h-screen rounded-lg border p-4">
						<h2 className="mb-2 font-medium">FunFact</h2>
					</section>
					{/* End of FunFact */}
					{/* Services */}
					<section className="rounded-lg border p-4">
						<h2 className="mb-2 font-medium">Services</h2>

					</section>
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
