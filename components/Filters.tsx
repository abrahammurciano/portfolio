import Filter from "../models/Filter";
import css from "../styles/Filters.module.css"
import "../util/ArrayExtensions"

export interface FiltersProps {
	filters: Filter[];
	setFilters: (filters: Filter[]) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
	return (
		<div className={css.Filters}>
			{filters.map((filter, index) => (
				<div key={index}>
					{filter.component(newFilter => setFilters(filters.instead(filter, newFilter)))}
				</div>
			))}
		</div>
	);
}