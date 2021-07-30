import './MainCardContents.css';
import SideBar from './SideBar';
import MainBar from './MainBar';
import logo from "./images/logo.svg";
import NavBar from "./NavBar";
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import pages from './data/pages';

export default function MainCardContents() {
	return (
		<div className="MainCardContents">
			<SideBar expandedWidth="260px">
				<img className="MainCardContents__Logo" src={logo} alt="Logo" />
				<NavBar />
			</SideBar>
			<MainBar>
				<Switch>
					{pages.map((page, index) => (
						<Route path={page.path} component={page.component} key={index} />
					))}
				</Switch>
				<Footer />
			</MainBar>
		</div>
	);
}