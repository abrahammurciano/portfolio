import Image from "next/image";
import { CSSProperties } from "react";

export interface ButtonIconProps {
	src: string;
	side?: "left" | "right";
}

export default function ButtonIcon(props: ButtonIconProps) {
	const style: CSSProperties = {
		paddingRight: props.side === "left" ? "15px" : undefined,
		paddingLeft: props.side === "right" ? "15px" : undefined,
	}
	return (
		<div style={style}>
			<Image src={props.src} alt="" width="26px" height="26px" />
		</div>
	)
}