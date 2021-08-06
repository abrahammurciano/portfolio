import WrapperProps from "../WrapperProps";
import Image from "next/image"
import css from "../styles/Background.module.css";

export interface BackgroundProps extends WrapperProps {
	image: string;
	dim?: number;
}

export default function Background(props: BackgroundProps) {
	return (
		<div className={css.Background}>
			<div className={`${css.Background__Image} ${css.Background__Layer}`}>
				<Image src={props.image} layout="fill" objectFit="cover" />
			</div>
			<div className={`${css.Background__Dim} ${css.Background__Layer}`} style={{ opacity: props.dim || 0 }} />
			{props.children}
		</div>
	)
}