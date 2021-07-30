import Home from '../Home';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import { ComponentType } from 'react';

export class Page {
	title: string;
	path: string;
	component: ComponentType<any>;

	constructor(title: string, path: string, component: ComponentType<any>) {
		this.title = title;
		this.path = path;
		this.component = component;
	}
}

const pages = [
	new Page("Home", "/", Home),
	new Page("Portfolio", "/portfolio", Portfolio),
	new Page("About", "/about", About),
	new Page("Contact", "/contact", Contact),
];

export default pages;