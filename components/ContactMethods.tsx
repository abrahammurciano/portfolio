import CardGrid from "./CardGrid";
import contactMethods_ from "../data/contact.json";
import ContactMethod from "../models/ContactMethod";
import React from "react";
import ContactTile from "./ContactTile";
const contactMethods: ContactMethod[] = contactMethods_;

export default function ContactMethods() {
	return (
		<CardGrid borderRadius="10px" cardMinWidth="400px" expectedMaxColumns={2} gap="20px" cardContents={contactMethods.map((contactMethod, index) => (<ContactTile contact={contactMethod} key={index} />))} />
	);
}