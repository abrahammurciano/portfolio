import pages from "../data/pages.json";
import css from "../styles/Footer.module.css";
import logo from "../public/images/logo_white.svg";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
	return (
		<div className={css.Footer}>
			<div className={css.Column}>
				<h3>Looking for something?</h3>
				{pages.map((page, index) => (
					<p key={index}>
						<Link href={page.path}>{page.title}</Link>
					</p>
				))}
			</div>
			<div className={css.Column}>
				<h3>Website designed by</h3>
				<Image src={logo} alt="" width="300px" height="135px" />
				<p>&copy; Abraham Murciano</p>
			</div>
		</div>
	);
}