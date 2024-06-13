import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return <span className={twMerge("bg-accent", className)}>{children}</span>;
};
