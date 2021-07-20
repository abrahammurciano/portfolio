import React from 'react';
import './MainFrame.css';
import Navbar from './Navbar';

class MainFrame extends React.Component {
	render() {
		return (
			<div className="MainFrame">
				<Navbar />
			</div>
		);
	}
}

export default MainFrame;