import { ReactNode } from "react";
import css from "../styles/CardGrid.module.css";
import range from "../util/range";
import Card from "./Card";

export interface CardGridProps {
	cardContents: ReactNode[];
	cardMinWidth: string;
	borderRadius: string;
	gap: string;
	expectedMaxColumns: number;
}

export default function CardGrid(props: CardGridProps) {
	const cssVars = {
		["--gap" as any]: props.gap,
		["--card-min-width" as any]: props.cardMinWidth,
	}

	return (
		<div className={css.CardGrid} style={cssVars}>
			{props.cardContents.map((content, index) => (
				<Card key={index} borderRadius={props.borderRadius} className={css.CardGridCell}>
					{content}
				</Card>
			))}
			{range(3).map((i) => (
				<div className={css.CardGridCell} key={i} />
			))}
		</div>
	);
}

CardGrid.defaultProps = {
	gap: "20px",
}