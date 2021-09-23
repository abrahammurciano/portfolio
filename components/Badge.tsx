import classNames from "classnames";
import QueryString from "query-string"
import css from "../styles/Badge.module.css";

export interface BadgeProps {
	skill: string;
	level?: number;
	primary_colour: string;
	secondary_colour: string;
	logo?: string;
	logo_colour: string;
	shadow?: boolean;
}

export default function Badge(props: BadgeProps) {
	const levels = ["Beginner", "Intermediate", "Good", "Very Good", "Expert"];

	function src(): string {
		const base = "https://img.shields.io/badge/";
		const basic_info = (
			props.level !== undefined ?
				props.skill + "-" + levels[props.level] :
				"-" + props.skill
		) + "-" + props.primary_colour;
		const url_params = {
			style: "for-the-badge",
			logo: props.logo,
			labelColor: props.secondary_colour,
			logoColor: props.logo_colour,
		}


		return base + basic_info + "?" + QueryString.stringify(url_params);
	}

	return (
		<img className={classNames({ [css.shadow]: props.shadow })} src={src()} alt={props.skill + (props.level !== undefined ? ` - ${levels[props.level]}` : "")} />
	)
}

Badge.defaultProps = {
	logo_colour: ""
}