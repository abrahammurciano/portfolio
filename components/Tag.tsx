export interface TagProps {
	label: string;
}

export default function Tag({ label }: TagProps) {
	return (
		<div>
			{label}
		</div>
	)
}