import { ReactNode } from "react";

export interface ContentBoxProps {
	width: string;
	height: string;

	className?: string;

	children?: ReactNode;
}

export default function ContentBox(props: ContentBoxProps) {
	return (
		<div
			className={`${props.width} ${props.height} shadow-[3px_3px_0_0_black] ${props.className}`}
		>
			{props.children}
		</div>
	);
}
