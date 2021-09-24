import React from "react";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import PortfolioItems from "../components/PortfolioItems";
import lines_background from "../public/images/lines_background.jpg";
import { useRouter } from "next/router";
import CheckboxFilter from "../CheckboxFilter";

export default function Portfolio() {
	let categories = ([] as string[]).concat(useRouter().query["categories"] || []).map(str => str.split(",")).flat();

	filters = [
		new CheckboxFilter("categories",) // TODO: get list of all categories from json file containing all portfolio items
	]

	return (
		<>
			<TitleSection title="My Portfolio" backgroundImage={lines_background} backgroundDim={0.3} />
			<Section>
				<PortfolioFilters />
				<PortfolioItems filters={filters} />
			</Section>
		</>
	);
}