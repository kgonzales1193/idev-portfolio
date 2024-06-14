import ResumeData from "@/components/ResumeData";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Resume`.
 */
export type ResumeProps = SliceComponentProps<Content.ResumeSlice>;

/**
 * Component for "Resume" Slices.
 */
import MotionDiv from "@/components/MotionDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	FaCss3,
	FaHtml5,
	FaJs,
	FaLaravel,
	FaNodeJs,
	FaReact,
	FaVuejs,
} from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import {
	SiExpress,
	SiMongodb,
	SiNextdotjs,
	SiTailwindcss,
} from "react-icons/si";

const skills = [
	{
		icon: <FaHtml5 />,
		name: "HTML 5",
	},
	{
		icon: <FaCss3 />,
		name: "CSS 3",
	},
	{
		icon: <FaJs />,
		name: "JavaScript",
	},
	{
		icon: <SiTailwindcss />,
		name: "Tailwind CSS",
	},
	{
		icon: <FaReact />,
		name: "React",
	},
	{
		icon: <SiNextdotjs />,
		name: "Next.js",
	},
	{
		icon: <FaVuejs />,
		name: "Vue.js",
	},
	{
		icon: <FaLaravel />,
		name: "Laravel",
	},
	{
		icon: <SiExpress />,
		name: "Express.js",
	},

	{
		icon: <SiMongodb />,
		name: "MongoDB",
	},
	{
		icon: <BsFiletypeSql />,
		name: "SQL",
	},
	{
		icon: <FaNodeJs />,
		name: "Node.js",
	},
];

const Resume = ({ slice }: ResumeProps): JSX.Element => {
	return (
		<MotionDiv
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn",
				},
			}}
			className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<Tabs
					defaultValue='about'
					className='flex flex-col xl:flex-row gap-[60px]'>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
						<TabsTrigger value='about'>About Me</TabsTrigger>
						<TabsTrigger value='experience'>Experience</TabsTrigger>
						<TabsTrigger value='education'>Education</TabsTrigger>
						<TabsTrigger value='skills'>Skills</TabsTrigger>
					</TabsList>
					{/* Content */}
					<div className='min-h-[70vh] w-full'>
						{/* About */}
						<TabsContent
							value='about'
							className='w-full text-center xl:text-left'>
							<div className='flex flex-col gap-[30px]'>
								<h3 className='text-4xl font-bold'>
									{slice.primary.about_title}
								</h3>
								<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
									{slice.primary.about_description}
								</p>
								<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px]'>
									{slice.primary.about_item.map((item, index) => {
										return (
											<li
												key={index}
												className='flex items-center justify-center xl:justify-start gap-4'>
												<span className='text-muted-foreground'>
													{item.field_name}:
												</span>
												<span className='text-xl'>{item.field_value}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* Experience */}
						<TabsContent value='experience' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>
									{slice.primary.experience_title}
								</h3>
								<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
									{slice.primary.experience_description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{slice.primary.experience_item.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-muted h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
													<span className='text-primary'>{item.duration}</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
														{item.position}
													</h3>
													<div className='flex items-center gap-3'>
														{/* DOT */}
														<span className='w-[6px] h-[6px] rounded-full bg-primary'></span>
														<p className='text-muted-foreground'>
															{item.company_name}
														</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* Education */}
						<TabsContent value='education' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>
									{slice.primary.education_title}
								</h3>
								<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
									{slice.primary.education_description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{slice.primary.education_item.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-muted h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
													<span className='text-primary'>
														{item.school_year}
													</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
														{item.degree}
													</h3>
													<div className='flex items-center gap-3'>
														{/* DOT */}
														<span className='w-[6px] h-[6px] rounded-full bg-primary'></span>
														<p className='text-muted-foreground'>
															{item.institution}
														</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* Skills */}
						<TabsContent value='skills' className='w-full h-full'>
							<div className='flex flex-col gap-[30px]'>
								<div className='flex flex-col gap-[30px] text-center xl:text-left'>
									<h3 className='text-4xl font-bold'>
										{slice.primary.skill_title}
									</h3>
									<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
										{slice.primary.skill_description}
									</p>
								</div>
								<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
									{skills.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className='w-full h-[150px] bg-muted rounded-xl flex justify-center items-center group'>
															<div className='text-6xl group-hover:text-primary transition-all duration-500'>
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className='capitalize'>{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</MotionDiv>
	);
};

export default Resume;
