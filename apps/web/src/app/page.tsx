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

	useGSAP(() => {
		const timer = setTimeout(() => {
			// hero animation
			//   heroTitleAnim();
			//   heroBgAnimation();
			//   // bounce animation
			//   bounceAnimation();
			//   // video anim
			//   videoAnimTwo();
			//   // panel animation
			//   panelOneAnimation();
			//   // award animation
			//   awardAnimOne();
			//   // instagram animation
			//   instagramAnim();
			hoverBtn();
		}, 100)
		return () => clearTimeout(timer);
	});
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
					<section className="min-h-1/2 rounded-lg border p-4">
						<h2 className="mb-2 font-medium">About</h2>
						<div className="w-hover-btn-wrapper">
							<Link
								className="tp-btn-circle w-hover-btn-item w-hover-btn"
								href="/portfolio-details-1"
							>
								<span className="tp-btn-circle-text">
									See Our <br /> Awards
								</span>
								<span className="tp-btn-circle-icon">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 11L11 1"
											stroke={'currentColor'}
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 1H11V11"
											stroke={'currentColor'}
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<i className="tp-btn-circle-dot"></i>
							</Link>
						</div>
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
