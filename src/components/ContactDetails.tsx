"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
	const formRef = useRef<HTMLFormElement>(null);
	const [error, setError] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (formRef.current) {
			emailjs
				.sendForm("service_4ahvg79", "template_gkpzedo", formRef.current, {
					publicKey: process.env.API_KEY,
				})
				.then(
					(result) => {
						setSuccess(true);
					},
					(error) => {
						setError(true);
					}
				);
		}
	};

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
					<div className='xl:-[54%] order-2 xl:order-none'>
						<form
							ref={formRef}
							onSubmit={sendEmail}
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
								<Input
									name='firstname'
									type='firstname'
									placeholder='First Name'
								/>
								<Input
									name='lastname'
									type='firstname'
									placeholder='Last Name'
								/>
								<Input name='email' type='email' placeholder='Email Address' />
								<Input name='phone' type='phone' placeholder='Phone Number' />
							</div>
							{/* Select */}
							<Select name='service'>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select a Service' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a Service</SelectLabel>
										<SelectItem value='web'>Web Development</SelectItem>
										<SelectItem value='design'>UI/UX Design</SelectItem>
										<SelectItem value='va'>Virtual Assistance</SelectItem>
										<SelectItem value='seo'>SEO</SelectItem>
										<SelectItem value='other'>Other Services</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* Textarea */}
							<Textarea
								name='message'
								className='h-[200px]'
								placeholder='Type your message here.'
							/>
							{/* Submit Button */}
							<Button
								size={"lg"}
								className='rounded-full max-w-40'
								type='submit'
								value='Send'>
								Send Message
							</Button>
							{error && "Message sent successfully!"}
							{success && "Failed to send the message. Please try again later."}
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
