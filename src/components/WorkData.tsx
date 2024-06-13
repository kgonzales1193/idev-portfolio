"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import Image from "next/image";
import WorkSliderButtons from "./WorkSliderButtons";

const projects = [
	{
		num: "01",
		category: "Frontend",
		Title: "Project 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, voluptas at velit amet illum!",
		stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
		image: "/assets/work/thumb1.png",
		live: "https://www.google.com",
		github: "https://www.github.com",
	},
	{
		num: "02",
		category: "Frontend",
		Title: "Project 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, voluptas at velit amet illum!",
		stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
		image: "/assets/work/thumb2.png",
		live: "https://www.google.com",
		github: "https://www.github.com",
	},
	{
		num: "03",
		category: "Frontend",
		Title: "Project 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, voluptas at velit amet illum!",
		stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
		image: "/assets/work/thumb3.png",
		live: "https://www.google.com",
		github: "https://www.github.com",
	},
	{
		num: "04",
		category: "Frontend",
		Title: "Project 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, voluptas at velit amet illum!",
		stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
		image: "/assets/work/thumb3.png",
		live: "https://www.google.com",
		github: "https://www.github.com",
	},
	{
		num: "05",
		category: "Frontend",
		Title: "Project 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, voluptas at velit amet illum!",
		stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
		image: "/assets/work/thumb2.png",
		live: "https://www.google.com",
		github: "https://www.github.com",
	},
	{
		num: "06",
		category: "Fullstack",
		Title: "Project 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id, voluptas at velit amet illum!",
		stack: [
			{ name: "Next.Js" },
			{ name: "Tailwind" },
			{ name: "Javascript" },
			{ name: "Prisma" },
			{ name: "Supabase" },
		],
		image: "/assets/work/thumb1.png",
		live: "https://www.google.com",
		github: "https://www.github.com",
	},
];

const WorkData = () => {
	const [project, setProject] = useState(projects[0]);
	const handleSlideChange = (swiper: { activeIndex: number }) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
					<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
						<div className='flex flex-col gap-[30px] h-[50%]'>
							{/* Outline Number */}
							<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
								{project.num}
							</div>
							{/* Project Category */}
							<h2 className='text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 ease-in-out capitalize'>
								{project.category} Project
							</h2>
							{/* Project Description */}
							<p className='w-full xl:w-[50%] text-muted-foreground'>
								{project.description}
							</p>
							{/* Stack */}
							<ul className='flex gap-4'>
								{project.stack.map((stack, index) => {
									return (
										<li key={index} className='text-xl text-primary'>
											{stack.name}
											{/* Remove the last comma */}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/* Border */}
							<div className='border border-border'></div>
							{/* Buttons */}
							<div className='flex items-center gap-4'>
								{/* Live Project */}
								<Link href={project.live} target='_blank'>
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
								</Link>
								{/* Github Link */}
								<Link href={project.github} target='_blank'>
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
								</Link>
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
											<div className='absolute top-0 bottom-0 w-full h-full bg-black/30 z-10'></div>
											{/* Image */}
											<div className='relative w-full h-full'>
												<Image
													src={project.image}
													alt={project.Title}
													fill
													className='object-cover'
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
			</div>
		</motion.section>
	);
};
export default WorkData;
