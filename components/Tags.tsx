import React from "react";
import css from "../styles/Tags.module.css";
import Tag from "./Tag";

export interface TagsProps {
	labels: string[];
}

export default function Tags({ labels }: TagsProps) {
	return (
		<div className={css.Tags}>
			{labels.map((label, index) => (
				<Tag label={label} key={index} />
			))}
		</div>
	);
}