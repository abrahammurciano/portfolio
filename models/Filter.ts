export default abstract class Filter<T> {
	readonly name: string;
	constructor(name: string) {
		this.name = name;
	}

	abstract component(onUpdate: (newFilter: Filter<T>) => void): JSX.Element;

	abstract queryString(): string;

	abstract filteredData(): T[];
}