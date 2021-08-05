import React from "react";
import Badge, { BadgeProps } from "./Badge";

export interface SkillsCategoryProps {
	category_name: string;
	badges: BadgeProps[];
}

export default function SkillsCategory(props: SkillsCategoryProps) {
	return (
		<>
			<h2>{props.category_name}</h2>
			{
				props.badges.map((badge_props, index) => (
					<Badge {...badge_props} key={index} />
				))
			}
		</>
	)
}