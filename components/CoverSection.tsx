import BubblePhoto from "./BubblePhoto";
import css from "../styles/CoverSection.module.css";
import profile_photo from "../public/images/profile_photo.jpg";
import Introduction from "./Introduction";

export default function CoverSection() {
	return (
		<div className={css.CoverSection}>
			<div className={css.CoverSection__Introduction}>
				<Introduction />
			</div>
			<div className={css.CoverSection__Photo}>
				<BubblePhoto image={profile_photo} diameter="300px" width="360px" height="330px"></BubblePhoto>
			</div>
		</div>
	);
}