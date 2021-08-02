import blob1 from "../public/images/blob1.svg";
import blob2 from "../public/images/blob2.svg";
import css from "../styles/BlobsBackground.module.css";

export default function BlobsBackground() {
	return (
		<div className={css.BlobsBackground}>
			<img src={blob1} alt="" className={css.BlobsBackground__TopRight} />
			<img src={blob2} alt="" className={css.BlobsBackground__BottomLeft} />
		</div>
	)
}