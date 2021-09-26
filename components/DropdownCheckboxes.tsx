import React from "react";
import css from "../styles/DropdownCheckboxes.module.css"
import Arrow from "./Arrow";

export interface DropdownCheckboxesProps {
	title: string;
	labels: string[];
	selected: Set<string>;
	setSelected: (selected: Set<string>) => void;
}

export default function DropdownCheckboxes(props: DropdownCheckboxesProps) {
	return (
		<div className={css.DropdownCheckboxes}>
			{props.title}
			<Arrow rotation="180deg" />
		</div>
	);
}