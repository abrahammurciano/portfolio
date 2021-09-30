import Project from "../models/Project";
import css from "../styles/Projects.module.css";
import ProjectTile from "./ProjectTile";

export interface ProjectsProps {
	projects: Project[];
}

export default function Projects(props: ProjectsProps) {
	return (
		<div className={css.Projects}>
			{props.projects.map((project, index) => (
				<ProjectTile key={index} project={project} />
			))}
		</div>
	);
}