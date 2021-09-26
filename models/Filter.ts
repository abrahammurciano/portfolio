export default abstract class Filter {
	readonly name: string;
	constructor(name: string) {
		this.name = name;
	}

	abstract component(onUpdate: (newFilter: Filter) => void): JSX.Element;

	abstract queryString(): string;
}