import Link from "next/link";
import React from "react";
import ContactMethod from "../models/ContactMethod";
import css from "../styles/ContactTile.module.css";

export interface ContactTileProps {
	contact: ContactMethod;
}

export default function ContactTile({ contact }: ContactTileProps) {
	return (
		<Link href={contact.url} passHref>
			<div className={css.ContactTile}>
				<div className={css.ContactIcon} style={{ backgroundImage: `url(${contact.icon})` }} />
				<div className={css.ContactLabel}>{contact.label}</div>
				<div className={`${css.ContactIcon} ${css.RightIcon}`} />
			</div>
		</Link>
	);
}