import css from "../styles/Checkbox.module.css"

export interface CheckboxProps {
	label: string;
	colour: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, colour, checked, onChange }: CheckboxProps) {
	return (
		<div>
			<label className={css.Checkbox} style={{ ["--checkbox-colour" as any]: colour }}>
				<input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
				<span>{label}</span>
			</label>
		</div>
	);
}

Checkbox.defaultProps = {
	checked: false,
	onChange: (_: boolean) => { return; }
}