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
			<div className={`${css.Image} ${css.Layer}`}>
				<Image src={props.image} layout="fill" objectFit="cover" alt="" />
			</div>
			<div className={`${css.Dim} ${css.Layer}`} style={{ opacity: props.dim }} />
			{props.children}
		</div>
	)
}

Background.defaultProps = {
	dim: 0
}