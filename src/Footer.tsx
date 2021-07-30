import { Link } from "react-router-dom";
import pages from "./data/pages";
import "./Footer.css";
import logo from "./images/logo_white.svg";

export default function Footer() {
	return (
		<div className="Footer">
			<div className="Footer__Column">
				<h3>Looking for something?</h3>
				{pages.map((page, index) => (
					<p key={index}>
						<Link to={page.path}>{page.title}</Link>
					</p>
				))}
			</div>
			<div className="Footer__Column">
				<h3>Website designed by</h3>
				<img src={logo} alt="" width="300px" />
				<p>&copy; Abraham Murciano</p>
			</div>
		</div>
	);
}