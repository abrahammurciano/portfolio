import Circle from "./Circle";
import css from "../styles/BubblePhoto.module.css";

export interface BubblePhotoProps {
	image: string;
	diameter: string;
	width: string;
	height: string;
}

export default function BubblePhoto(props: BubblePhotoProps) {
	return (
		<div className={css.BubblePhoto} style={{ width: props.width, height: props.height }}>
			<div className={`${css.Circle} ${css.Photo}`}>
				<Circle diameter={props.diameter} backgroundImage={`url(${props.image})`} />
			</div>
			<div className={`${css.Circle} ${css.Border}`}>
				<Circle diameter={props.diameter} backgroundColor="var(--light-1)" />
			</div >
			<div className={`${css.Background} ${css.Circle}`}>
				<Circle diameter={props.diameter} backgroundImage="linear-gradient(to top right, var(--primary-dark), var(--accent-dark) 90%, var(--accent-light))" />
			</div >
		</div >
	);
}
