import React from 'react';
import './MainCardContents.css';
import SideBar from './SideBar';
import MainBar from './MainBar';
import logo from "./images/logo.svg";
import NavBar from "./NavBar";

class MainCardContents extends React.Component {
	render() {
		return (
			<div className="MainCardContents">
				<SideBar expandedWidth="260px">
					<img className="MainCardContents__Logo" src={logo} alt="Logo" />
					<NavBar />
				</SideBar>
				<MainBar>

				</MainBar>
			</div>
		);
	}
}

export default MainCardContents;