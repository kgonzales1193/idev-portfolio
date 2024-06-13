"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { navlinks } from "@/constants/navlinks";
import { Button } from "../ui/button";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import { twMerge } from "tailwind-merge";
import { FiDownload } from "react-icons/fi";
import Socials from "../Socials";

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger>
				<CiMenuFries className='text-[32px] text-primary' />
			</SheetTrigger>
			<SheetContent className='flex flex-col justify-between items-center'>
				{/* Logo */}
				<div className='mt-20 text-center text-2xl'>
					<Link href='/'>
						<h1 className='font-semibold text-4xl'>
							Kevin<span className='text-primary'>.</span>
						</h1>
					</Link>
				</div>
				{/* Nav */}
				<nav className='flex flex-col justify-center items-center gap-8'>
					{navlinks.map((item, index) => {
						return (
							<Link
								href={item.href}
								key={index}
								className={`${item.href === pathname && "border-b-2 border-primary"} capitalize font-medium hover:text-primary transition-all duration-300 ease-in-out`}>
								{item.label}
							</Link>
						);
					})}
				</nav>
				<div className='flex flex-col items-center gap-8'>
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
			</SheetContent>
		</Sheet>
	);
};
export default MobileNav;
