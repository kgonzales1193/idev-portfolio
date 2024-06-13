"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { navlinks } from "@/constants/navlinks";

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className='flex gap-8'>
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
	);
};
export default Nav;
