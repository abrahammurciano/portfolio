import css from "../styles/MainCardContents.module.css";
import SideBar from "./SideBar";
import logo from "../public/images/logo.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WrapperProps from "../WrapperProps";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import { useRouter } from "next/dist/client/router";

export default function MainCardContents({ children }: WrapperProps) {
	const [opened, setOpened] = useState(false);

	let router = useRouter();
	let contentWrapperRef = useRef<HTMLDivElement>(null);
	function onLocationChange() {
		contentWrapperRef.current?.scrollIntoView();
	}

	useEffect(onLocationChange, [router]);

	return (
		<div className={css.MainCardContents}>
			<SideBar expandedWidth="260px" openedState={[opened, setOpened]}>
				<div className={css.MainCardContents__Logo}>
					<Image src={logo} alt="Logo" layout="fill" />
				</div>
				<NavBar onClick={() => setOpened(false)} />
			</SideBar>
			<SimpleBar style={{ maxHeight: "100%" }}>
				<div ref={contentWrapperRef}>

					{children}
					<Footer />
				</div>
			</SimpleBar>
		</div>
	);
}