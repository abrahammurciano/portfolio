import Checkbox from "./Checkbox";
import "../util/SetExtensions"

export interface CheckboxesProps {
	labels: string[];
	checked: Set<string>;
	colour: string;
	onChange: (checked: Set<string>) => void;
}

export default function Checkboxes({ labels, colour, checked, onChange }: CheckboxesProps) {
	return (
		<>
			{labels.map((label, index) => (
				<Checkbox key={index} label={label} colour={colour} checked={checked.has(label)} onChange={isChecked => onChange(isChecked ? checked.with(label) : checked.without(label))} />
			))}
		</>
	);
}

Checkboxes.defaultProps = {
	onChange: (_: Set<string>) => { return; }
}