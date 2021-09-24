import Filter from "./Filter";

export default class CheckboxFilter extends Filter {
	all: string[];
	selected: string[];

	constructor(name: string, allOptions: string[], selectedOptions: string[] = allOptions) {
		super(name);
		this.all = allOptions;
		this.selected = selectedOptions;
	}

	component(): JSX.Element {
		throw new Error("Method not implemented.");
	}
}