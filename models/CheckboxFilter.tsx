import DropdownCheckboxes from "../components/DropdownCheckboxes";
import Filter from "./Filter";

export default class CheckboxFilter<T> extends Filter<T> {
	private readonly checkboxes: { label: string, passesFilter: (datum: T) => boolean }[];
	private readonly selectedCheckboxes: { label: string, passesFilter: (datum: T) => boolean }[];
	private readonly allLabels: string[];
	private readonly selected: Set<string>;
	readonly data: T[];

	constructor(name: string, data: T[], checkboxes: { label: string, passesFilter: (datum: T) => boolean }[], selectedOptions: Set<string>) {
		super(name);
		this.checkboxes = checkboxes;
		this.allLabels = checkboxes.map(c => c.label);
		this.selected = selectedOptions;
		this.selectedCheckboxes = checkboxes.filter(c => this.selected.has(c.label));
		this.data = data;
	}

	component(onUpdate: (newFilter: Filter<T>) => void): JSX.Element {
		return (
			<DropdownCheckboxes title={this.name} labels={this.allLabels} checked={this.selected} onUpdate={checked => onUpdate(new CheckboxFilter(this.name, this.data, this.checkboxes, checked))} />
		)
	}

	queryString(): string {
		if (this.allLabels.length === this.selected.size) {
			return "";
		}
		if (this.selected.size === 0) {
			return `${this.name}=`;
		}
		return Array.from(this.selected).map(s => `${this.name}=${encodeURIComponent(s)}`).join("&");
	}

	filteredData(): T[] {
		return this.data.filter(datum => this.selectedCheckboxes.some(c => c.passesFilter(datum)));
	}
}