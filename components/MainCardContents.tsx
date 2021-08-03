import css from "../styles/MainCardContents.module.css";
import SideBar from "./SideBar";
import MainBar from "./MainBar";
import logo from "../public/images/logo.svg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WrapperProps from "../WrapperProps";
import Image from "next/image";

export default function MainCardContents({ children }: WrapperProps) {
	return (
		<div className={css.MainCardContents}>
			<SideBar expandedWidth="260px">
				<div className={css.MainCardContents__Logo}>
					<Image src={logo} alt="Logo" layout="fill" />
				</div>
				<NavBar />
			</SideBar>
			<MainBar>
				{children}
				<Footer />
			</MainBar>
		</div>
	);
}