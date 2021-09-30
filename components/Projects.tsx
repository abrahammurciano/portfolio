import Project from "../models/Project";

export interface ProjectsProps {
	projects: Project[];
}

export default function Projects(props: ProjectsProps) {
	return (<>
		selected projects:
		{props.projects.map((project, index) => (
			<div key={index}>
				{project.title}
			</div>
		))}
	</>);
}