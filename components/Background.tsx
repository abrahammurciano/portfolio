import WrapperProps from "../models/WrapperProps";
import Image from "next/image"
import css from "../styles/Background.module.css";

export interface BackgroundProps extends WrapperProps {
	image: string;
	dim: number;
}

export default function Background(props: BackgroundProps) {
	return (
		<div className={css.Background}>
			<div className={`${css.Background__Image} ${css.Background__Layer}`}>
				<Image src={props.image} layout="fill" objectFit="cover" alt="" />
			</div>
			<div className={`${css.Background__Dim} ${css.Background__Layer}`} style={{ opacity: props.dim }} />
			{props.children}
		</div>
	)
}

Background.defaultProps = {
	dim: 0
}