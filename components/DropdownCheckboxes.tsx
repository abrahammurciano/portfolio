import classNames from "classnames";
import React, { useRef, useState } from "react";
import css from "../styles/DropdownCheckboxes.module.css"
import Arrow from "./Arrow";
import Card from "./Card";
import useOnClickOutside from "use-onclickoutside"
import Checkboxes from "./Checkboxes";
import Pill from "./Pill";

export interface DropdownCheckboxesProps {
	title: string;
	labels: string[];
	checked: Set<string>;
	onUpdate: (checked: Set<string>) => void;
}

export default function DropdownCheckboxes(props: DropdownCheckboxesProps) {
	const [opened, setOpened] = useState(false);
	const ref = useRef(null);
	useOnClickOutside(ref, () => setOpened(false));

	return (
		<div ref={ref} className={css.DropdownCheckboxes}>
			<Pill padding="0px">
				<div className={classNames(css.Button, { [css.Opened]: opened })} onClick={() => setOpened(!opened)}>
					{props.title}
					<Arrow rotation={opened ? "0deg" : "180deg"} colour="var(--dropdown-arrow-colour)" size="25px" />
				</div>
			</Pill>
			{opened && (
				<div className={css.CheckboxesContainer}>
					<Card width="unset" height="unset" borderRadius="20px">
						<div className={css.CheckboxesWrapper}>
							<Checkboxes labels={props.labels} colour={"var(--primary-dark)"} checked={props.checked} onChange={props.onUpdate} all={true} />
						</div>
					</Card>
				</div>
			)}
		</div>
	);
}