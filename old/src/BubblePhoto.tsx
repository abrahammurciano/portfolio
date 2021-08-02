import Circle from "./Circle";
import "../styles/BubblePhoto.module.css";

export interface BubblePhotoProps {
	image: string;
	diameter: string;
	width: string;
	height: string;
}

export default function BubblePhoto(props: BubblePhotoProps) {
	return (
		<div className="BubblePhoto" style={{ width: props.width, height: props.height }}>
			<div className="BubblePhoto__Circle BubblePhoto__Photo">
				<Circle diameter={props.diameter} backgroundImage={`url(${props.image})`} />
			</div>
			<div className="BubblePhoto__Circle BubblePhoto__Border">
				<Circle diameter={props.diameter} backgroundColor="var(--light-1)" />
			</div>
			<div className="BubblePhoto__Background BubblePhoto__Circle">
				<Circle diameter={props.diameter} backgroundImage="linear-gradient(to top right, var(--primary-dark), var(--accent-dark) 90%, var(--accent-light))" />
			</div>
		</div>
	);
}
