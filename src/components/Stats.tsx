"use client";

import CountUp from "react-countup";

const stats = [
	{
		title: "Years of Experience",
		count: 2,
	},
	{
		title: "Projects Completed",
		count: 20,
	},
	{
		title: "Satisfied Clients",
		count: 5,
	},
	{
		title: "Cups of Coffee",
		count: 214,
	},
];

const Stats = () => {
	return (
		<section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none'>
					{stats.map((item, index) => {
						return (
							<div
								className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
								key={index}>
								<CountUp
									end={item.count}
									duration={5}
									delay={2}
									className='text-4xl xl:text-6xl font-extrabold'
								/>
								<p
									className={`${item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/70`}>
									{item.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Stats;
