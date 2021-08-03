import blob1 from "../public/images/blob1.svg";
import blob2 from "../public/images/blob2.svg";
import css from "../styles/BlobsBackground.module.css";
import Image from "next/image"

export default function BlobsBackground() {
	return (
		<div className={css.BlobsBackground}>
			<div className={css.BlobsBackground__TopRight}>
				<Image src={blob1} alt="" width="536px" height="300px" />
			</div>
			<div className={css.BlobsBackground__BottomLeft} >
				<Image src={blob2} alt="" width="300" height="436" />
			</div>
		</div>
	)
}