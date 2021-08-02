export class Page {
	title: string;
	path: string;

	constructor(title: string, path: string) {
		this.title = title;
		this.path = path;
	}
}

const pages = [
	new Page("Home", "/"),
	new Page("Portfolio", "/portfolio"),
	new Page("About", "/about"),
	new Page("Contact", "/contact"),
];

export default pages;