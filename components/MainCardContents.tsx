import css from "../styles/MainCardContents.module.css";
import SideBar from './SideBar';
import MainBar from './MainBar';
import logo from "../public/images/logo.svg";
import NavBar from "./NavBar";
import Footer from './Footer';
import WrapperProps from "../WrapperProps";

export default function MainCardContents({ children }: WrapperProps) {
	return (
		<div className={css.MainCardContents}>
			<SideBar expandedWidth="260px">
				<img className={css.MainCardContents__Logo} src={logo} alt="Logo" />
				<NavBar />
			</SideBar>
			<MainBar>
				{children}
				<Footer />
			</MainBar>
		</div>
	);
}