import pages from "../data/pages.json";
import css from "../styles/Footer.module.css";
import logo from "../public/images/logo_white.svg";
import Link from "next/link";

export default function Footer() {
	return (
		<div className={css.Footer}>
			<div className={css.Footer__Column}>
				<h3>Looking for something?</h3>
				{pages.map((page, index) => (
					<p key={index}>
						<Link href={page.path}>{page.title}</Link>
					</p>
				))}
			</div>
			<div className={css.Footer__Column}>
				<h3>Website designed by</h3>
				<img src={logo} alt="" width="300px" />
				<p>&copy; Abraham Murciano</p>
			</div>
		</div>
	);
}