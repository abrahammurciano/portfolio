import { useRouter } from "next/router";
import React from "react";
import Section from "../../components/Section";
import projects_ from "../../data/projects.json";
import Project from "../../models/Project";
import ImageGallery from "react-image-gallery";
import css from "../../styles/ProjectPage.module.css";
import Error from "next/error";
import Tags from "../../components/Tags";
const projects: Project[] = projects_;

export default function ProjectPage() {
	const router = useRouter();
	const project = projects.find(p => p.id === router.query["projectId"]);

	if (project === undefined) {
		return (<Error statusCode={404} />);
	}

	const singleImageProps = project.images.length <= 1 ? {
		showBullets: false,
		showFullscreenButton: false,
		showIndex: false,
		showNav: false,
		showPlayButton: false,
	} : {}

	return (
		<>
			<Section>
				<h1>{project.title}</h1>
				<div className={css.TagsWrapper}>
					<Tags labels={project.categories} getLink={label => `/portfolio?Categories=${encodeURIComponent(label)}`} />
				</div>
				<div className={css.GalleryWrapper}>
					<ImageGallery items={project.images.map(image => ({ original: image, thumbnail: image }))} showThumbnails={false} {...singleImageProps} />
				</div>
				<p>{project.description}</p>
			</Section>
		</>
	);
}