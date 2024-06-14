"use client";

import { useState } from "react";

import WorkSliderButtons from "./WorkSliderButtons";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const WorkSlider = ({ projects }: { projects: any[] }) => {
	const [project, setProject] = useState(projects[0]);
	const handleSlideChange = (swiper: { activeIndex: number }) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	};
	return (
		<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
			<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
				<div className='flex flex-col gap-[30px] h-[50%]'>
					{/* Outline Number */}
					<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
						{project.project_number}
					</div>
					{/* Project Category */}
					<h2 className='text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 ease-in-out capitalize'>
						{project.category} Project
					</h2>
					{/* Project Description */}
					<p className='w-full xl:w-[80%] text-muted-foreground'>
						{project.description}
					</p>
					{/* Stack */}
					<p className='text-xl text-primary'>{project.stack}</p>
					{/* Border */}
					<div className='border border-border'></div>
					{/* Buttons */}
					<div className='flex items-center gap-4'>
						{/* Live Project */}
						<PrismicNextLink href={project.live} target='_blank'>
							<TooltipProvider delayDuration={100}>
								<Tooltip>
									<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
										<BsArrowUpRight className='text-3xl group-hover:text-primary' />
									</TooltipTrigger>
									<TooltipContent>
										<p>Live Project</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</PrismicNextLink>
						{/* Github Link */}
						<PrismicNextLink href={project.github} target='_blank'>
							<TooltipProvider delayDuration={100}>
								<Tooltip>
									<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
										<BsGithub className='text-3xl group-hover:text-primary' />
									</TooltipTrigger>
									<TooltipContent>
										<p>View on Github</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</PrismicNextLink>
					</div>
				</div>
			</div>
			<div className='w-full xl:w-[50%]'>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					onSlideChange={handleSlideChange}
					className='xl:h-[520px] mb-12'>
					{projects.map((project, index) => {
						return (
							<SwiperSlide key={index} className='w-full'>
								<div className='h-[460px] relative group flex justify-center items-center'>
									{/* Overlay */}
									<div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
									{/* Image */}
									<div className='relative w-full h-full'>
										<PrismicNextImage
											field={project.image}
											alt=''
											fill
											className='object-contain xl:object-cover'
										/>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
					{/* Slider Buttons */}
					<WorkSliderButtons
						containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
						btnStyles='bg-primary hover:bg-accent text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all duration-500 ease-in-out'
						iconsStyles='text-white'
					/>
				</Swiper>
			</div>
		</div>
	);
};
export default WorkSlider;
