import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import type { ChangeEvent, ComponentProps } from 'react';

export default function CreditCalculatorInput({
	label,
	symbol = '€',
	symbolAfter = false,
	...props
}: ComponentProps<'input'> & {
	label: string;
	symbol?: string;
	symbolAfter?: boolean;
	error?: string;
	onValueChange: (value: number) => void;
}) {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onValueChange(Number(e.target.value ?? 0));
	};

	return (
		<div>
			<div className="flex gap-4 justify-between">
				<Label htmlFor={props.id}>{label}:</Label>
				<div className={`flex items-center gap-2${symbolAfter ? ' flex-row-reverse' : ''}`}>
					<span>{symbol}</span>
					<Input type="number" onChange={onChange} {...props} />
				</div>
			</div>
			{props.error && (
				<span className="block text-right text-destructive text-sm mt-1 -mb-3">{props.error}</span>
			)}
		</div>
	);
}
