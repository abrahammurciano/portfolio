import React from "react";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Projects from "../components/Projects";
import lines_background from "../public/images/lines_background.jpg";
import { useRouter } from "next/router";
import CheckboxFilter from "../models/CheckboxFilter";
import projects from "../data/portfolio.json"
import Project from "../models/Project";
import Filters from "../components/Filters";

export default function Portfolio() {
	const categories = ([] as string[]).concat(useRouter().query["categories"] || []).map(str => str.split(",")).flat();
	const filters = [
		new CheckboxFilter("categories", getCategories(projects), categories)
	]

	return (
		<>
			<TitleSection title="My Portfolio" backgroundImage={lines_background} backgroundDim={0.3} />
			<Section>
				<Filters filters={filters} />
				<Projects filters={filters} />
			</Section>
		</>
	);
}

function getCategories(data: Project[]): string[] {
	return data.map(project => project.categories).flat()
}