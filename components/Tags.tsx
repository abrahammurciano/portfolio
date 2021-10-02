import React from "react";
import css from "../styles/Tags.module.css";
import Tag from "./Tag";

export interface TagsProps {
	labels: string[];
	getLink?: (label: string) => string;
}

export default function Tags({ labels, getLink }: TagsProps) {
	return (
		<div className={css.Tags}>
			{labels.map((label, index) => (
				<Tag label={label} key={index} link={getLink ? getLink(label) : undefined} />
			))}
		</div>
	);
}