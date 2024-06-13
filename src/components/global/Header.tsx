import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Header = async () => {
	return (
		<header className='py-8 xl:py-12'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<h1 className='font-bold text-4xl xl:text-5xl'>
						Kevin<span className='text-primary'>.</span>
					</h1>
				</Link>
				{/* Desktop Nav */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Link href='/contact'>
						<Button
							variant={"outline"}
							size={"sm"}
							className='border-primary hover:bg-primary rounded-full px-4'>
							Hire Me
						</Button>
					</Link>
				</div>
				{/* Mobile Nav */}
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};
export default Header;
