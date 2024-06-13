"use client";

import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+63) 961 449 9827",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "kgonzales1193@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Toril District, Davao City, Philippines 8000",
	},
];

const ContactDetails = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className='py-6'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row gap-[30px]'>
					{/* Form */}
					<div className='xl:w-[54%] order-2 xl:order-none'>
						<form
							action=''
							className='flex flex-col gap-6 p-10 bg-muted rounded-xl'>
							<h3 className='text-4xl text-primary'>
								Let&apos;s Work Together
							</h3>
							<p className='text-muted-foreground'>
								I&apos;d love to hear from you! Whether you have a question,
								feedback, or just want to say hello, feel free to reach out.
							</p>
							{/* Input */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<Input type='firstname' placeholder='First Name' />
								<Input type='firstname' placeholder='First Name' />
								<Input type='email' placeholder='Email Address' />
								<Input type='phone' placeholder='Phone Number' />
							</div>
							{/* Select */}
							<Select>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select a Service' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a Service</SelectLabel>
										<SelectItem value='est'>Web Development</SelectItem>
										<SelectItem value='cst'>UI/UX Design</SelectItem>
										<SelectItem value='mst'>Virtual Assistance</SelectItem>
										<SelectItem value='pst'>SEO</SelectItem>
										<SelectItem value='lst'>Other Services</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* Textarea */}
							<Textarea
								className='h-[200px]'
								placeholder='Type your message here.'
							/>
							{/* Submit Button */}
							<Button
								size={"lg"}
								className='rounded-full max-w-40'
								type='submit'>
								Send Message
							</Button>
						</form>
					</div>
					{/* Info */}
					<div className='flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
						<ul className='flex flex-col gap-10'>
							{info.map((item, index) => {
								return (
									<li key={index} className='flex items-center gap-6'>
										<div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-muted text-primary rounded-md flex items-center justify-center'>
											<div className='text-[28px]'>{item.icon}</div>
										</div>
										<div className='flex-1 '>
											<p className='text-muted-foreground'>{item.title}</p>
											<h3 className='text-xl'>{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};
export default ContactDetails;
