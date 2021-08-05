export interface BadgeProps {
	skill: string;
	level?: number;
	primary_colour: string;
	secondary_colour: string;
	logo: string;
	logo_colour?: string;
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
			logoColor: props.logo_colour || "",
		}

		return base + basic_info + obj_to_url_params(url_params);
	}

	function obj_to_url_params(url_params: any): string {
		// TODO: look up library for this
		let separator = "?";
		let result = "";
		for (const key in url_params) {
			if (Object.prototype.hasOwnProperty.call(url_params, key) && url_params[key]) {
				result += separator + key + "=" + url_params[key];
				separator = "&";
			}
		}
		return result;
	}

	return (
		<img src={src()} alt={props.skill + (props.level !== undefined ? ` - ${levels[props.level]}` : "")} />
	)
}