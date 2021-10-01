import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Projects from "../components/Projects";
import abstract_purple from "../public/images/abstract_purple.jpg";
import { useRouter } from "next/router";
import CheckboxFilter from "../models/CheckboxFilter";
import projects_ from "../data/projects.json";
import Filters from "../components/Filters";
import Filter from "../models/Filter";
import Project from "../models/Project";

const projects: Project[] = projects_;
const allCategories = projects.map(project => project.categories).flat().filter((item, pos, self) => self.indexOf(item) === pos);
const checkboxes = allCategories.map(category => ({ label: category, passesFilter: (project: Project) => project.categories.includes(category) }));

export default function Portfolio() {
	const router = useRouter();
	const [filters, setFilters] = useState<Filter<Project>[]>([]);

	function updateQueryString(newFilters: Filter<Project>[]): void {
		const queryString = newFilters.map(f => f.queryString()).join("&");
		router.push("/portfolio" + (queryString && "?" + queryString));
	}

	function setFiltersFromQuery() {
		const selectedCategories = new Set(([router.query["Categories"] || []]).flat()); // can be list or string, so flatten for consistent type
		setFilters([
			new CheckboxFilter("Categories", projects, checkboxes, selectedCategories),
		]);
	}

	useEffect(setFiltersFromQuery, [router.query]);

	return (
		<>
			<TitleSection title="My Portfolio" backgroundImage={abstract_purple} backgroundDim={0.3} />
			<Section>
				<Filters filters={filters} onUpdate={updateQueryString} />
				<Projects projects={projects.filter(project => filters.every(f => f.filteredData().includes(project)))} />
			</Section>
		</>
	);
}