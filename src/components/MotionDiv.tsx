"use client";

import { motion } from "framer-motion";

interface MotionDivProps {
	className: string;
	children: React.ReactNode;
	initial: {
		opacity: number;
	};
	animate: {
		opacity: number;
		transition: {
			delay: number;
			duration: number;
			ease: string;
		};
	};
}

const MotionDiv = ({
	children,
	className,
	initial,
	animate,
}: MotionDivProps) => {
	return (
		<motion.div initial={initial} animate={animate} className={className}>
			{children}
		</motion.div>
	);
};

export default MotionDiv;
