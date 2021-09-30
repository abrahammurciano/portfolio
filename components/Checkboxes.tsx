import Checkbox from "./Checkbox";
import "../util/SetExtensions"

export interface CheckboxesProps {
	labels: string[];
	checked: Set<string>;
	colour: string;
	onChange: (checked: Set<string>) => void;
	all: boolean;
}

export default function Checkboxes({ labels, colour, checked, onChange, all }: CheckboxesProps) {
	return (
		<>
			{all &&
				<>
					<Checkbox label="All" colour={colour} checked={labels.length === checked.size} onChange={isChecked => onChange(new Set(isChecked ? labels : []))} />
					<hr />
				</>
			}
			{labels.map((label, index) => (
				<Checkbox key={index} label={label} colour={colour} checked={checked.has(label)} onChange={isChecked => onChange(isChecked ? checked.with(label) : checked.without(label))} />
			))}
		</>
	);
}

Checkboxes.defaultProps = {
	onChange: (_: Set<string>) => { return; },
	all: false,
}