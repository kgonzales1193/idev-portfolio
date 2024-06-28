import WorkData from "@/components/WorkData";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
import MotionDiv from "@/components/MotionDiv";
import { PrismicNextLink } from "@prismicio/next";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSlider from "@/components/WorkSlider";

const Work = ({ slice }: WorkProps): JSX.Element => {
	return (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
			<div className='container mx-auto'>
				<WorkSlider projects={slice.primary.project_item} />
			</div>
		</MotionDiv>
	);
};

export default Work;
