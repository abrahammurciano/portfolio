import BubblePhoto from "./BubblePhoto";
import "./CoverSection.css";
import profile_photo from "./images/profile_photo.jpg";
import Introduction from "./Introduction";

export default function CoverSection() {
	return (
		<div className="CoverSection">
			<div className="CoverSection__Introduction">
				<Introduction />
			</div>
			<div className="CoverSection__Photo">
				<BubblePhoto image={profile_photo} diameter="300px" width="360px" height="330px"></BubblePhoto>
			</div>
		</div>
	);
}