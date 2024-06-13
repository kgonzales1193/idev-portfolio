import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { ParagraphGenerateEffect } from "@/components/ui/paragraph-generate-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='min-h-screen bg-background'>
			<div className='container mx-auto h-full'>
				<div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
					{/* Text */}
					<div className='text-center xl:text-left order-2 xl:order-none'>
						<Highlight className='text-xl'>
							{slice.primary.eyebrow_heading}
						</Highlight>
						<h1>
							<TextGenerateEffect
								words={slice.primary.heading || "Hello, I'm Kevin Gonzales"}
							/>
						</h1>
						<ParagraphGenerateEffect
							className='max-w-[500 px] md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
							words={slice.primary.description || "I'm a full-stack developer."}
						/>
						{/* CTA & Social Links */}
						<div className='mt-10 flex flex-col xl:flex-row items-center gap-8'>
							<Link href='/Kevin Paul Gonzales CV.pdf' target='_blank' download>
								<Button
									variant={"outline"}
									size={"lg"}
									className='flex items-center gap-2 rounded-full border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out'>
									Download CV
									<FiDownload className='text-xl' />
								</Button>
							</Link>
							<div className='mb-10 xl:mb-0'>
								<Socials
									containerStyles='flex gap-6'
									iconStyles='h-9 w-9 rounded-full flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out'
								/>
							</div>
						</div>
					</div>
					{/* Image */}
					<div className='order-1 xl:order-none mb-8 xl:mb-0'>
						<Photo image={slice.primary.image} />
					</div>
				</div>
				<Stats />
			</div>
		</section>
	);
};

export default Hero;
