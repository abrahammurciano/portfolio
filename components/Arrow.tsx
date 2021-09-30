import css from "../styles/Arrow.module.css";

export interface ArrowProps {
	rotation: string;
	colour: string;
	size: string;
}

export default function Arrow(props: ArrowProps) {
	const cssVars = {
		["--arrow-colour" as any]: props.colour,
		["--rotation" as any]: props.rotation,
		["--size" as any]: props.size
	}
	return (
		<div className={css.Arrow} style={cssVars}>
			<div className={`${css.Line} ${css.Line_1}`} />
			<div className={`${css.Line} ${css.Line_2}`} />
		</div>
	)
}