import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { Button } from "./ui/button";
import { socialLinks } from "@/types/socialLinks";

interface SocialsProps {
	containerStyles: string;
	iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
	return (
		<div className={containerStyles}>
			{socials.map((link: socialLinks) => {
				return (
					<Link href={link.href} key={link.href}>
						<Button variant={"outline"} size={"icon"} className={iconStyles}>
							<link.icon />
						</Button>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
