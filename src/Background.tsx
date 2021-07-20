import blob1 from './images/blob1.svg';
import blob2 from './images/blob2.svg';
import './Background.css';
import React from 'react';

class Background extends React.Component {
	render() {
		return (
			<div className="Background">
				<img src={blob1} alt="" className="Background__TopRight" />
				<img src={blob2} alt="" className="Background__BottomLeft" />
			</div>
		)
	}
}

export default Background;