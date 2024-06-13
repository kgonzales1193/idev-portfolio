import MotionDiv from "@/components/MotionDiv";
import ServiceList from "@/components/ServiceList";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { BsArrowDownRight } from "react-icons/bs";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<MotionDiv
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
					}}
					className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
					{slice.primary.services.map((service, index) => {
						return (
							<div
								key={index}
								className='flex flex-1 flex-col justify-center gap-6 group'>
								{/* top */}
								<div className='w-full flex justify-between items-center'>
									<div className='text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500 ease-in-out'>
										{service.number}
									</div>
									<PrismicNextLink
										field={service.link || ""}
										className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-primary transition-all duration-500 ease-in-out flex justify-center items-center hover:-rotate-45'>
										<BsArrowDownRight className='text-accent text-3xl' />
									</PrismicNextLink>
								</div>
								{/* Title */}
								<h2 className='text-[42px] font-bold leading-none group-hover:text-primary transition-all duration-500 ease-in-out'>
									{service.title}
								</h2>
								{/* Description */}
								<p className='text-white/60'>{service.description}</p>
								{/* Border */}
								<div className='border-b border-white/20 w-full'></div>
							</div>
						);
					})}
				</MotionDiv>
			</div>
		</section>
	);
};

export default Services;
