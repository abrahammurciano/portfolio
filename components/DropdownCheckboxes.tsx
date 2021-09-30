import classNames from "classnames";
import React, { useRef, useState } from "react";
import css from "../styles/DropdownCheckboxes.module.css"
import Arrow from "./Arrow";
import Card from "./Card";
import useOnClickOutside from "use-onclickoutside"
import Checkboxes from "./Checkboxes";

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
			<div className={classNames(css.DropdownCheckboxes__Button, { [css.DropdownCheckboxes__Opened]: opened })} onClick={() => setOpened(!opened)}>
				{props.title}
				<Arrow rotation={opened ? "0deg" : "180deg"} colour="var(--dropdown-arrow-colour)" size="25px" />
			</div>
			{opened && (
				<div className={css.DropdownCheckboxes__CheckboxesContainer}>
					<Card width="unset" height="unset" borderRadius="20px">
						<div className={css.DropdownCheckboxes__CheckboxesWrapper}>
							<Checkboxes labels={props.labels} colour={"var(--primary-dark)"} checked={props.checked} onChange={props.onUpdate} all={true} />
						</div>
					</Card>
				</div>
			)}
		</div>
	);
}