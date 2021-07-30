import blob1 from './images/blob1.svg';
import blob2 from './images/blob2.svg';
import './BlobsBackground.css';

export default function BlobsBackground() {
	return (
		<div className="BlobsBackground">
			<img src={blob1} alt="" className="BlobsBackground__TopRight" />
			<img src={blob2} alt="" className="BlobsBackground__BottomLeft" />
		</div>
	)
}