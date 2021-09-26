import DropdownCheckboxes from "../components/DropdownCheckboxes";
import Filter from "./Filter";

export default class CheckboxFilter extends Filter {
	private all: string[];
	private selected: Set<string>;

	constructor(name: string, allOptions: string[], selectedOptions: Set<string> = new Set(allOptions)) {
		super(name);
		this.all = allOptions;
		this.selected = selectedOptions;
	}

	component(onUpdate: (newFilter: Filter) => void): JSX.Element {
		return (
			<DropdownCheckboxes title={this.name} labels={this.all} selected={this.selected} setSelected={(selected) => onUpdate(new CheckboxFilter(this.name, this.all, selected))} />
		)
	}

	queryString(): string {
		return Array.from(this.selected).map(s => `${this.name}=${s}`).join("&");
	}
}