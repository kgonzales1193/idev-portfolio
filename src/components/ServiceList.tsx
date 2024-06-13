"use client";

import { PrismicLink } from "@prismicio/react";
import { motion } from "framer-motion";

import { BsArrowDownRight } from "react-icons/bs";

const ServiceList = ({ service }: { service: any }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}></motion.div>
	);
};
export default ServiceList;
