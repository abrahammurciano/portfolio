import React from "react";
import ContactForm from "../components/ContactForm";
import ContactMethods from "../components/ContactMethods";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import envelopes from "../public/images/envelopes.jpeg";

export default function Contact() {
	return (
		<>
			<TitleSection title="Get in Touch..." backgroundImage={envelopes} backgroundDim={0.1} />
			<Section>
				<ContactMethods />
			</Section>
			<Section>
				<ContactForm />
			</Section>
		</>
	);
}