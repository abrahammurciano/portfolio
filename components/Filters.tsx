import Filter from "../models/Filter";
import css from "../styles/Filters.module.css"
import "../util/ArrayExtensions"

export interface FiltersProps<T> {
	filters: Filter<T>[];
	onUpdate: (filters: Filter<T>[]) => void;
}

export default function Filters<T>({ filters, onUpdate }: FiltersProps<T>) {
	return (
		<div className={css.Filters}>
			{filters.map((filter, index) => (
				<div key={index}>
					{filter.component(newFilter => onUpdate(filters.instead(filter, newFilter)))}
				</div>
			))}
		</div>
	);
}