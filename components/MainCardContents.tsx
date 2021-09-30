import css from "../styles/MainCardContents.module.css";
import SideBar from "./SideBar";
import logo from "../public/images/logo.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WrapperProps from "../models/WrapperProps";
import Image from "next/image";
import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export default function MainCardContents({ children }: WrapperProps) {
	const [opened, setOpened] = useState(false);

	return (
		<div className={css.MainCardContents}>
			<SideBar expandedWidth="260px" openedState={[opened, setOpened]}>
				<div className={css.Logo}>
					<Image src={logo} alt="Logo" layout="fill" />
				</div>
				<NavBar onClick={() => setOpened(false)} />
			</SideBar>
			<SimpleBar style={{ maxHeight: "100%" }}>
				<div>
					{children}
					<Footer />
				</div>
			</SimpleBar>
		</div>
	);
}