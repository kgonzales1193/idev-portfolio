import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaVuejs,
	FaLaravel,
} from "react-icons/fa";

import { BsFiletypeSql } from "react-icons/bs";
import {
	SiMongodb,
	SiExpress,
	SiTailwindcss,
	SiNextdotjs,
} from "react-icons/si";
import MotionDiv from "./MotionDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

const about = {
	title: "About Me",
	description:
		"I have a diverse background, working on projects from small websites to complex web applications. Additionally, I've served as a virtual assistant, honing my organizational and communication skills, and as a quality assurance analyst, ensuring high product standards. These roles have given me a comprehensive understanding of both technical and operational aspects of project management and delivery.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Kevin Paul Gonzales",
		},
		{
			fieldName: "Phone",
			fieldValue: "+63 961 449 9827",
		},
		{
			fieldName: "Developer Experience",
			fieldValue: "2+ years",
		},
		{
			fieldName: "Skype",
			fieldValue: "live:.cid.57888d34493da7bf",
		},
		{
			fieldName: "Email",
			fieldValue: "kgonzales1193@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My Experiences",
	description:
		"I have a diverse background, working on projects from small websites to complex web applications. Additionally, I've served as a virtual assistant, honing my organizational and communication skills, and as a quality assurance analyst, ensuring high product standards. These roles have given me a comprehensive understanding of both technical and operational aspects of project management and delivery.",
	items: [
		{
			company: "Baluartech Solutions",
			position: "Full-Stack Developer",
			duration: "September 2023 - March 2024",
		},
		{
			company: "Eatagaylo",
			position: "Junior Web Developer",
			duration: "January 2022 - March 2023",
		},
		{
			company: "Jennifer DeVinney",
			position: "Virtual Assistant",
			duration: "November 2021 - April 2021",
		},
		{
			company: "CNM BPO Solutions",
			position: "Quality Assurance Analyst",
			duration: "October 2017 - November 2020",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My Education",
	description:
		"I transitioned to a developer career by completing a hands-on Web Development bootcamp. Previously, I spent two years studying for a Bachelor of Science in Information Technology, building a strong foundation in computer science. This blend of formal education and bootcamp training has equipped me with a robust and versatile web development skill set.",
	items: [
		{
			institution: "Zuitt Coding Bootcamp",
			degree: "Full-Stack Web Development",
			duration: "2022 - 2023",
		},
		{
			institution: "University of Negros Occidental - Recoletos",
			degree: "BS Information Technology",
			duration: "2013 - 2014",
		},
		{
			institution: "Carlos Hilado Memorial State College",
			degree: "BS Information Technology",
			duration: "2011 - 2012",
		},
		{
			institution: "Saint Michael's College",
			degree: "BS Business Administration - Financial Management",
			duration: "2010 - 2011",
		},
	],
};

const skills = {
	title: "My Skills",
	description:
		"I possess a diverse skill set in web development, with expertise in both front-end and back-end technologies. My proficiency includes MongoDB, Express.js, React, Next.js, Vue.js, HTML, CSS, JavaScript, Laravel, and SQL databases. This comprehensive knowledge enables me to build scalable, high-performance web applications from the ground up.",
	skillList: [
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
	],
};

const ResumeData = () => {
	return (
		<MotionDiv
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
								<h3 className='text-4xl font-bold'>{about.title}</h3>
								<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
									{about.description}
								</p>
								<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px]'>
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className='flex items-center justify-center xl:justify-start gap-4'>
												<span className='text-muted-foreground'>
													{item.fieldName}:
												</span>
												<span className='text-xl'>{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* Experience */}
						<TabsContent value='experience' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>{experience.title}</h3>
								<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
									{experience.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{experience.items.map((item, index) => {
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
															{item.company}
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
								<h3 className='text-4xl font-bold'>{education.title}</h3>
								<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
									{education.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-muted h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
													<span className='text-primary'>{item.duration}</span>
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
									<h3 className='text-4xl font-bold'>{skills.title}</h3>
									<p className='max-w-[800px] text-muted-foreground mx-auto xl:mx-0'>
										{skills.description}
									</p>
								</div>
								<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
									{skills.skillList.map((skill, index) => {
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
export default ResumeData;
