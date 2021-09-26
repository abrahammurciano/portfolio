import React from "react";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Projects from "../components/Projects";
import lines_background from "../public/images/lines_background.jpg";
import { useRouter } from "next/router";
import CheckboxFilter from "../models/CheckboxFilter";
import projects from "../data/projects.json"
import Filters from "../components/Filters";
import Filter from "../models/Filter";

export default function Portfolio() {
	const router = useRouter();
	const categories = new Set(([router.query["categories"] || []]).flat());
	const allCategories = projects.map(project => project.categories).flat();
	const filters = [new CheckboxFilter("Categories", allCategories, categories)];

	function setFilters(new_filters: Filter[]): void {
		router.push(`/portfolio?${new_filters.map(f => f.queryString()).join("&")}`);
	}

	return (
		<>
			<TitleSection title="My Portfolio" backgroundImage={lines_background} backgroundDim={0.3} />
			<Section>
				<Filters filters={filters} setFilters={setFilters} />
				<Projects filters={filters} />
			</Section>
		</>
	);
}