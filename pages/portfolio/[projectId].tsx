import { useRouter } from "next/router";
import projects_ from "../../data/projects.json";
import Project from "../../models/Project";
const projects: Project[] = projects_;

export default function ProjectPage() {
	const router = useRouter();
	const project = projects.find(p => p.id === router.query["projectId"]);

	if (project === undefined) {
		router.push("/404");
		return;
	}

	return (
		<>
			<h1>{project.title}</h1>
		</>
	);
}