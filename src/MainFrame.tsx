import React from 'react';
import './MainFrame.css';
import SideBar from './SideBar';
import MainBar from './MainBar';

class MainFrame extends React.Component {
	render() {
		return (
			<div className="MainFrame">
				<SideBar>
					{/* <Logo /> */}
					{/* <NavBar /> */}
				</SideBar>
				<MainBar>

				</MainBar>
			</div>
		);
	}
}

export default MainFrame;