export interface AvatarProps {
	src: string;
	alt: string;

	className?: string;
}

export default function Avatar(props: AvatarProps) {
	return (
		<img
			src={props.src}
			alt={props.alt}
			className={`rounded-full object-cover sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:h-[375px] lg:w-[375px] ${props.className}`}
		/>
	);
}
