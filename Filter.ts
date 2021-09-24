export default abstract class Filter {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	abstract component(): JSX.Element;
}