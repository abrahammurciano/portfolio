import React from 'react';
import './MainCardContents.css';
import SideBar from './SideBar';
import MainBar from './MainBar';
import logo from "./images/logo.svg";
import NavBar from "./NavBar";
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

class MainCardContents extends React.Component {
	render() {
		return (
			<div className="MainCardContents">
				<SideBar expandedWidth="260px">
					<img className="MainCardContents__Logo" src={logo} alt="Logo" />
					<NavBar />
				</SideBar>
				<MainBar>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
						<Route path="/portfolio">
							<Portfolio />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				</MainBar>
			</div>
		);
	}
}

export default MainCardContents;