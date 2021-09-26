import Filter from "../models/Filter";
import css from "../styles/Filters.module.css"

export interface FiltersProps {
	filters: Filter[];
	setFilters: (filters: Filter[]) => void;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
	return (
		<div className={css.Filters}>
			{filters.map(filter => (
				filter.component(newFilter => {
					const newFilters = [...filters];
					newFilters[newFilters.indexOf(filter)] = newFilter;
					setFilters(newFilters);
				})
			))}
		</div>
	);
}