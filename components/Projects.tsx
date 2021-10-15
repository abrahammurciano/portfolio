import React from "react";
import Project from "../models/Project";
import CardGrid from "./CardGrid";
import ProjectTile from "./ProjectTile";

export interface ProjectsProps {
	projects: Project[];
}

export default function Projects(props: ProjectsProps) {
	return (
		<CardGrid borderRadius="10px" gap="20px" cardMinWidth="320px" expectedMaxColumns={3} cardContents={props.projects.map((project, index) => (
			<ProjectTile key={index} project={project} />
		))} />
	)
}