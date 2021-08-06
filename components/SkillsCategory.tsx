import React from "react";
import Badge, { BadgeProps } from "./Badge";
import css from "../styles/SkillsCategory.module.css";

export interface SkillsCategoryProps {
	category_name: string;
	badges: BadgeProps[];
}

export default function SkillsCategory(props: SkillsCategoryProps) {
	return (
		<>
			<h2>{props.category_name}</h2>
			<div className={css.SkillsCategory__Badges}>
				{
					props.badges.map((badge, index) => (
						<div className={css.SkillsCategory__BadgeWrapper} key={index}>
							<Badge {...badge} shadow={true} />
						</div>
					))
				}
			</div>
		</>
	)
}