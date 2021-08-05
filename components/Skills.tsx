import skills from "../data/skills.json";
import SkillsCategory from "./SkillsCategory";

export default function Skills() {

	return (
		<>
			<h1>My Skills</h1>
			{skills.map((category, index) => (
				<SkillsCategory {...category} key={index} />
			))}
		</>
	)
}
