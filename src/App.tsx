import ConditionalForm, { type CreditType } from '@/components/conditional-form.tsx';
import CreditCalculator from '@/components/credit-calculator.tsx';
import { useState } from 'react';

export default function App() {
	const [isDisabled, setDisabled] = useState(true);
	const [creditType, setCreditType] = useState<CreditType>('mortgage');

	return (
		<div className="max-w-[600px] mx-auto p-4 flex flex-col justify-center gap-8 min-h-svh">
			<ConditionalForm setCreditType={setCreditType} setDisabled={setDisabled} />
			<CreditCalculator isMortgage={creditType === 'mortgage'} isDisabled={isDisabled} />
		</div>
	);
}
