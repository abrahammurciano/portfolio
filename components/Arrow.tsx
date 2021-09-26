import css from "../styles/Arrow.module.css";

export interface ArrowProps {
	rotation: string;
}

export default function Arrow({ rotation }: ArrowProps) {
	return (
		<>
			<div className={`${css.Arrow} ${css.Arrow__line_1}`} />
			<div className={`${css.Arrow} ${css.Arrow__line_2}`} />
		</>
	)
}