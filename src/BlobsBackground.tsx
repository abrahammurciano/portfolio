import blob1 from './images/blob1.svg';
import blob2 from './images/blob2.svg';
import './BlobsBackground.css';
import React from 'react';

class BlobsBackground extends React.Component {
	render() {
		return (
			<div className="BlobsBackground">
				<img src={blob1} alt="" className="BlobsBackground__TopRight" />
				<img src={blob2} alt="" className="BlobsBackground__BottomLeft" />
			</div>
		)
	}
}

export default BlobsBackground;