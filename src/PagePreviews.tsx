import React from "react";
import ImageTextSplit from "./ImageTextSplit";
import profile_photo from "./images/profile_photo.jpg";

class PagePreviews extends React.Component {
	render() {
		return (
			<ImageTextSplit imageSrc={profile_photo} imageSide="left" />
			// <PagePreview />
			// <PagePreview />
			// <PagePreview />
			// <PagePreview />
		);
	}
}

export default PagePreviews;