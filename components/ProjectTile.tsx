import React from "react";
import Project from "../models/Project";
import css from "../styles/ProjectTile.module.css";
import Card from "./Card";
import Image from "next/image"
import { useRouter } from "next/router";

export interface ProjectTileProps {
	project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
	const router = useRouter();
	return (
		<Card className={css.ProjectTile} onClick={() => router.push(`/portfolio/${project.id}`)} borderRadius="10px">
			<div className={css.Thumbnail}>
				<Image src={project.thumbnail} layout="fill" objectFit="cover" alt="" />
			</div>
			<div className={css.TextWrapper}>
				<div className={css.Title}>{project.title}</div>
				<div className={css.Description}>{project.description}</div>
			</div>
		</Card>
	);
}